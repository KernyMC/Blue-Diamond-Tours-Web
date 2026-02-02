# Etapa 1: Build
FROM node:20-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código fuente
COPY . .

# Build del proyecto Astro
RUN npm run build

# Etapa 2: Producción con Nginx
FROM nginx:alpine AS production

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos estáticos generados por Astro
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puerto 4321
EXPOSE 4321

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]