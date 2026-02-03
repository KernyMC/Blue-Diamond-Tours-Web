# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Build del proyecto Astro
RUN npm run build

# Etapa 2: Producción con Node.js
FROM node:20-alpine AS production

WORKDIR /app

# Copiar los archivos necesarios desde el builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Variables de entorno
ENV HOST=0.0.0.0
ENV PORT=4321

# Exponer puerto
EXPOSE 4321

# Iniciar el servidor
CMD ["node", "./dist/server/entry.mjs"]
