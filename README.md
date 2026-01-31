# 🌊 Blue Diamond Tours - Galápagos

Sitio web oficial de Blue Diamond Tours, operador turístico especializado en tours y experiencias en las Islas Galápagos, San Cristóbal.

![Blue Diamond Tours](https://img.shields.io/badge/Astro-4.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Características

- 🏝️ **Tours en Galápagos**: Catálogo completo de tours y actividades
- 📱 **Diseño Responsive**: Optimizado para todos los dispositivos
- 🎨 **UI Moderna**: Interfaz atractiva con animaciones suaves
- 📧 **Formulario de Contacto**: Modal interactivo para reservas
- 🔍 **SEO Optimizado**: Metadatos y estructura optimizada para buscadores
- ⚡ **Rendimiento**: Carga rápida con Astro
- 🌐 **Multiidioma**: Contenido en español

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o pnpm

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/KernyMC/Blue-Diamond-Tours-Web.git
cd Blue-diamond-Web
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run astro` | Ejecuta comandos de Astro CLI |

## 🏗️ Build de Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`

Para previsualizar el build:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
Blue-diamond-Web/
├── public/              # Archivos estáticos
│   └── images/         # Imágenes del sitio
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── cards/     # Componentes de tarjetas
│   │   ├── common/    # Componentes comunes
│   │   ├── layout/    # Layout components (Navbar, Footer)
│   │   └── views/     # Vistas específicas
│   ├── data/          # Datos de tours y paquetes
│   ├── layouts/       # Layouts de página
│   ├── pages/         # Páginas del sitio
│   │   ├── index.astro
│   │   ├── contacto.astro
│   │   ├── ferries.astro
│   │   ├── privacy.astro
│   │   └── terminos.astro
│   └── styles/        # Estilos globales
├── astro.config.mjs   # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind
└── tsconfig.json      # Configuración de TypeScript
```

## 🎨 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)** - Sistema de iconos
- **[Ant Design Icons](https://ant.design/components/icon/)** - Biblioteca de iconos

## 🌟 Características Principales

### Tours y Paquetes

- Catálogo de tours diarios
- Paquetes multi-día
- Información detallada de cada tour
- Galería de imágenes
- Precios y duración

### Formulario de Contacto

- Modal interactivo
- Validación de campos
- Pre-llenado de email
- Campos específicos para tours en Galápagos

### Páginas Legales

- Política de Privacidad
- Términos y Condiciones
- Contenido específico para operador turístico

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (opcional):

```env
# Configuración del sitio
PUBLIC_SITE_URL=https://bluediamondtours.com
```

### Personalización

- **Colores**: Edita `tailwind.config.mjs` para cambiar la paleta de colores
- **Tours**: Modifica `src/data/tours.ts` para actualizar tours y paquetes
- **Imágenes**: Coloca tus imágenes en `public/images/`

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente Astro
3. Deploy automático en cada push

### Netlify

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

### Otros Servicios

El proyecto puede desplegarse en cualquier servicio que soporte sitios estáticos:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📄 Licencia

Este proyecto es propiedad de Blue Diamond Tours.

## 👥 Contacto

**Blue Diamond Tours**
- 📍 San Cristóbal, Islas Galápagos, Ecuador
- 📧 Email: info@bluediamondtours.com
- 📱 Teléfono: +593 999 999 999
- 🌐 Web: [bluediamondtours.com](https://bluediamondtours.com)

---

Hecho con ❤️ para las Islas Galápagos 🦎🌊
