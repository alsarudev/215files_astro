# 🎞️ 215files – Audiovisual Collective Website

A visually-driven website developed with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/) for the audiovisual collective [**215files**](https://215files.netlify.app/).  
This platform showcases the photographic and videographic work of young talents from Alcorcón.

> 🚀 Deployed on [Netlify](https://www.netlify.com/) with continuous integration.

👉 **[Visit the project](https://your-deployment-link.netlify.app)**

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Role](#-role)
- [Features](#-features)
- [Deployment](#-deployment)
- [Tech Stack](#-tech-stack)

---

## 🧭 Overview

**215files** is a modern and visually engaging website created to highlight the work of the **215files collective**, a group of young creatives from Alcorcón focused on urban photography and video production.

This digital showcase was built to give visibility to the collective's artistic projects, prioritizing performance, visual identity, and a clean aesthetic.

My contribution was twofold:
- 📷 As a **photographer**, capturing key moments during audiovisual sessions.
- 💻 As a **developer**, building the site with Astro and TailwindCSS, ensuring optimal performance and user experience.

---

## 👨‍💻 Role

**Photographer & Web Developer**  
Responsible for creating original visual content and building the entire website using Astro and TailwindCSS.

---

## 🎬 Features

- 📸 **Homepage**: A clean, static landing page featuring audiovisual and photographic works by the 215files team.
- 🎨 **Visual-first Design**: Minimalist layout with focus on media content and urban narrative.
- ⚡ **Fast Load Times**: Built with performance in mind to deliver a smooth browsing experience.

---

## 🚀 Deployment

The site is deployed on **Netlify**, allowing fast and automated deployments directly from the Git repository.  
Every code or content update is reflected immediately thanks to continuous integration.

---

## 🧪 Tech Stack

- **Astro** – Static site generator for fast and modern websites
- **TailwindCSS** – Utility-first CSS framework for responsive and aesthetic design
- **Netlify** – Hosting and CI/CD platform

---

## 🙌 Acknowledgments

Built with ❤️ by and for the 215files collective.

# 215 Files - Sitio Web

Sitio web profesional para 215 Files, construido con Astro y Tailwind CSS.

## 🚀 Características

- **Diseño moderno y responsive**
- **Formulario de contacto funcional** con envío de emails
- **Integración con Stripe** para pagos
- **Código limpio y mantenible**
- **Optimizado para SEO**
- **Deploy automático en Netlify**

## 🛠️ Tecnologías

- **Astro** - Framework web
- **Tailwind CSS** - Framework de estilos
- **TypeScript** - Tipado estático
- **Nodemailer** - Envío de emails
- **Stripe** - Procesamiento de pagos
- **Netlify** - Hosting y deploy

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ContactForm.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── HeroVideo.astro
│   └── ProyectosCarousel.astro
├── layouts/            # Layouts de página
│   └── Layout.astro
├── pages/              # Páginas y API routes
│   ├── index.astro
│   ├── success.astro
│   ├── cancel.astro
│   └── api/
│       ├── contact.js
│       ├── stripe-prices.js
│       └── stripe-session.js
├── utils/              # Utilidades y constantes
│   ├── constants.ts
│   └── helpers.ts
├── styles/             # Estilos globales
│   └── global.css
└── assets/             # Imágenes y recursos

public/
├── js/                 # JavaScript del cliente
│   ├── contact-form.js
│   └── header.js
└── assets/             # Assets públicos
```

## 🚀 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/alsarudev/215files_astro
   cd 215files_astro
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz:
   ```env
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASS=tu-contraseña-de-aplicación
   STRIPE_SECRET_KEY=tu-clave-secreta-de-stripe
   ```

4. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## 📧 Configuración del Email

### Para Gmail:
1. Activa la verificación en dos pasos
2. Genera una contraseña de aplicación
3. Usa esa contraseña en `EMAIL_PASS`

### Para Netlify:
1. Ve a Site Settings → Environment Variables
2. Agrega `EMAIL_USER` y `EMAIL_PASS`

## 🎨 Personalización

### Colores de la marca:
Edita `src/utils/constants.ts`:
```typescript
export const BRAND_COLORS = {
    primary: 'rgb(255,43,57)',
    white: '#ffffff',
    black: '#000000',
};
```

### Menú de navegación:
Edita `src/utils/constants.ts`:
```typescript
export const MENU_ITEMS = [
    {
        text: "PROYECTOS",
        href: "#proyectos"
    },
    {
        text: "CONTACTO",
        href: "#contacto"
    }
];
```

## 🏗️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build

## 📦 Deploy

El proyecto está configurado para deploy automático en Netlify:

1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno
3. El deploy se ejecuta automáticamente

## 🧹 Clean Code

Este proyecto sigue las mejores prácticas de clean code:

- **Separación de responsabilidades** - JavaScript separado de HTML
- **Constantes centralizadas** - Configuraciones en `utils/constants.ts`
- **Funciones helper** - Utilidades reutilizables en `utils/helpers.ts`
- **Componentes modulares** - Cada componente tiene una responsabilidad específica
- **TypeScript** - Tipado estático para mejor mantenibilidad
- **Comentarios descriptivos** - Código autodocumentado

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para preguntas o soporte, usa el formulario de contacto en el sitio web o pongase en contacto con el desarrollador de la pagina por [correo electronico](mailto:alfonso.sanchez.ruizz@gmail.com).

