
# Demo 
https://alectrlsuprcl.github.io/portafolio-react/

# Plantilla Moderna de Portafolio
Una plantilla moderna y responsiva para portafolio, construida con React, TypeScript y Vite. Incluye animaciones fluidas, rendimiento optimizado y un diseño centrado en la accesibilidad.
git 
## 🚀 Características

- **Stack Tecnológico Moderno**: React 19, TypeScript, Vite 6
- **Estilizado con Emotion**: Utiliza `@emotion/styled` para estilos basados en componentes
- **Animaciones Suaves**: Impulsadas por Framer Motion
- **Rendimiento Optimizado**:
   - División automática de código
   - Compresión Brotli y Gzip
   - Componentes cargados de forma perezosa
   - Visualización del tamaño del bundle
- **Totalmente Responsivo**: Funciona perfectamente en todos los dispositivos
- **Accesibilidad**: Etiquetas ARIA y HTML semántico
- **Modo Oscuro Listo**: Soporte de temas integrado

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/simpleC0de/portfolio-01.git
cd portfolio-01
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📝 Personalización

### Información Personal
Edita los siguientes archivos para personalizar tu portafolio:

1. `src/components/sections/Hero.tsx`:
    - Actualiza tu nombre, título y descripción
    - Modifica los enlaces de redes sociales

2. `src/components/sections/Projects.tsx`:
    - Agrega tus proyectos y sus detalles

3. `src/components/sections/Skills.tsx`:
    - Actualiza tus habilidades y experiencia

4. `src/components/sections/Contact.tsx`:
    - Personaliza la información de contacto

### Estilos
- Personalización de tema: `src/styles/theme.ts`
- Estilos globales: `src/styles/GlobalStyles.tsx`

## 🚀 Despliegue

Esta plantilla está configurada para desplegarse en GitHub Pages por defecto. El archivo `vite.config.ts` está configurado con:
```typescript
base: '/portfolio-01/'  // Cambia esto por el nombre de tu repositorio
```

Para desplegar:

1. Actualiza el `base` en `vite.config.ts` para que coincida con el nombre de tu repositorio:
```typescript
base: '/nombre-de-tu-repo/'
```

2. Construye el proyecto:
```bash
npm run build
```

3. Despliega en GitHub Pages:
    - Haz push a tu repositorio en GitHub
    - Habilita GitHub Pages en la configuración del repositorio
    - Selecciona la rama `gh-pages` como fuente

### Despliegue Alternativo

Para otras plataformas (Vercel, Netlify, etc.):
1. Elimina o actualiza la propiedad `base` en `vite.config.ts`
2. Sigue las instrucciones específicas de la plataforma

## ⚙️ Características de Desarrollo

### Optimización de Build

El proyecto incluye varias características de optimización:

- **División de Código**: Los paquetes de proveedores se separan automáticamente
```typescript
manualChunks: {
   vendor: ['react', 'react-dom', 'framer-motion', '@emotion/react', '@emotion/styled'],
   icons: ['react-icons']
}
```

- **Compresión**: Brotli y Gzip habilitados
   - Brotli: Compresión nivel 11
   - Gzip: Compresión nivel 9
   - Umbral: 512 bytes

- **Análisis de Bundle**: Visualiza el tamaño de tu bundle
```bash
npm run build
# Abre el análisis del bundle automáticamente en el navegador
```

### Monitoreo de Rendimiento

- Visualización del tamaño del bundle con `rollup-plugin-visualizer`
- Reporte de tamaño comprimido
- Advertencias por tamaño de chunk (límite: 1000kb)

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye para producción
- `npm run preview`: Previsualiza el build de producción
- `npm run lint`: Lint del código

## 🔧 Requisitos del Sistema

- Node.js 18+
- npm 7+

## 📄 Licencia

Licencia MIT - ¡siéntete libre de usar esta plantilla para tu portafolio!

