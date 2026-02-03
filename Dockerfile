# syntax=docker/dockerfile:1
# ========================================
# Multi-Stage Dockerfile para Astro SSR
# Optimizado para Dokploy
# ========================================

# ========================================
# Stage 1: Build
# ========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias necesarias para build
RUN apk add --no-cache libc6-compat

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias para build
RUN npm ci --ignore-scripts && \
    npm cache clean --force

# Copiar código fuente
COPY . .

# Build de Astro para producción
RUN npm run build

# ========================================
# Stage 2: Production Runtime
# ========================================
FROM node:20-alpine AS runtime

WORKDIR /app

# Instalar dumb-init para proper signal handling
RUN apk add --no-cache dumb-init

# Crear usuario no-root por seguridad
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

# Copiar package files
COPY package*.json ./

# Instalar SOLO dependencias de producción
RUN npm ci --omit=dev --ignore-scripts && \
    npm cache clean --force

# Copiar build desde stage builder
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist

# Variables de entorno por defecto
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4321

# Cambiar a usuario no-root
USER nodejs

# Exponer puerto
EXPOSE 4321

# Health check mejorado usando endpoint dedicado
HEALTHCHECK --interval=30s --timeout=10s --start-period=90s --retries=5 \
    CMD node -e "const http = require('http'); const options = { host: 'localhost', port: 4321, path: '/api/health', timeout: 8000 }; const req = http.get(options, (res) => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => { try { const health = JSON.parse(data); process.exit(health.status === 'ok' || health.status === 'degraded' ? 0 : 1); } catch(e) { process.exit(1); } }); }); req.on('error', () => { process.exit(1); }); req.on('timeout', () => { req.destroy(); process.exit(1); });"

# Comando de inicio con dumb-init para proper signal handling
CMD ["dumb-init", "node", "./dist/server/entry.mjs"]
