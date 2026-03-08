# 🎞️ 215files – Audiovisual Collective Website

Plataforma oficial del colectivo audiovisual [**215files**](https://215files.netlify.app/), un grupo de talentos creativos enfocados en la fotografía y producción de vídeo urbano. 

Este proyecto web está diseñado bajo rigurosos estándares de rendimiento y con una estética premium inspirada de las grandes tecnológicas, integrando interfaces de cristal (Glassmorphism), micro-interacciones suaves y animaciones de scroll inmersivas.

> 🚀 Desplegado de forma automatizada sobre la infraestructura global Edge de [Netlify](https://www.netlify.com/).

👉 **[Visita el proyecto en vivo aquí](https://215files-astro.netlify.app)**

---

## ✨ Características Premium (UI/UX)

La plataforma cuenta con detalles de diseño de vanguardia concebidos para lograr la máxima inmersión visual:

- 🎬 **Hero Video Optimizado**: Carga instantánea o *Zero-Delay* mediante compresión de pósters en `.webp` y un iframe asíncrono optimizado sin rastreadores `(DNT=1)`.
- 🕹️ **Carrusel Coverflow 3D**: Visor de proyectos tipo "cinta cilíndrica" propulsado por Swiper, simulando efectos de profundidad tridimensional interactivas (`Apple-like peek-a-boo`).
- 🪄 **Scroll Inmersivo con GSAP**: Animaciones fluidas programadas con `GreenSock (GSAP) & ScrollTrigger` que revelan sutilmente el contenido mientras desciendes (`fade-up`, `scale-in`, *laser-lines*).
- 💎 **Diseño Glassmorphism**: Botones emergentes tipo pastilla y componentes translúcidos flotantes con destellos y sombreados de profundidad volumétrica.
- ✉️ **Contacto Dinámico Serverless**: Formulario con Modales Premium y entrega de correos electrónicos en HTML Responsivo estructurado usando endpoints nativos.

---

## 🛠️ Stack Tecnológico

La web está construida buscando un balance perfecto entre velocidad pura (Sitios Estáticos) e interacciones dinámicas.

*   ⚡ **[Astro](https://astro.build/)**: Framework de última generación renderizado en el servidor para entregar el HTML más veloz posible sin JavaScript innecesario.
*   🎨 **[Tailwind CSS](https://tailwindcss.com/)**: Motor de estilos por utilidad, para layouts escalables y clases combinadas de *Backdrop Blurs*.
*   🎞️ **[GSAP](https://gsap.com/)**: Motor de animaciones a nivel profesional de la industria.
*   📫 **Nodemailer**: Procesamiento seguro de correos electrónicos bajo el capó.
*   🚀 **Netlify**: Alojamiento rápido con Integración y Despliegue Continuo (CI/CD).

---

## 📁 Arquitectura del Proyecto

```text
src/
├── components/          # Fragmentos UI modulares (Astro)
│   ├── ContactForm.astro     # Formulario avanzado con endpoints
│   ├── Header.astro          # Navbar flotante (Isla de Cristal)
│   ├── Footer.astro          # Cierre dinámico automatizado
│   ├── HeroVideo.astro       # Video Vimeo y optimizaciones WebP
│   └── ProyectosCarousel.astro # Lógica Coverflow 3D y Swiper
├── layouts/             # Envoltorios de páginas maestras
│   └── Layout.astro          # Motor GSAP y pre-conexiones globales
├── pages/               # Rutas principales y Endpoints API
│   ├── api/
│   │   └── contact.js        # Procesador de backend de emails
│   └── index.astro           # Vista Home
├── styles/              # Reglas Universales
│   └── global.css            # Fuentes Google (Inter) y variables
└── assets/              # Archivos de Imagen fuente
    └── ...
```

---

## 🚀 Guía de Instalación y Desarrollo

1. **Clona el repositorio en tu máquina:**
   ```bash
   git clone https://github.com/alsarudev/215files_astro
   cd 215files_astro
   ```

2. **Instala las dependencias del ecosistema:**
   ```bash
   npm install
   ```

3. **Configura tus variables de Entorno seguras:**
   Crea un archivo `.env` en la raíz del proyecto para habilitar los envíos de contacto.
   ```env
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASS=tu-contraseña-de-aplicación-segura
   ```

4. **Arranca el entorno de desarrollo ultrarrápido:**
   ```bash
   npm run dev
   ```
   > Observa la magia ocurrir visitando `http://localhost:4321`

---

## 🧰 Comandos de Producción

| Comando | Finalidad |
|---------|----------|
| `npm run dev` | Inicia un Servidor Local de Desarrollo con recarga rápida. |
| `npm run build` | Compila toda la web hacia una aplicación estática optimizada en la carpeta de producción (`dist/`). |
| `npm run preview` | Emula el servidor de origen probando cómo funcionará exactamente el proyecto compilado tras hacer un build. |
| `npx astro check` | Verifica si existen errores de compatibilidad severos en los templates. |

---

## 🤝 Contribuyendo

Si quieres añadir mejoras o proyectos a **215files**:
1. Crea un Fork de este repositorio.
2. Abre tu rama de características: `git checkout -b feature/MiEfectoNuevo`
3. Consolida tus ajustes: `git commit -m 'Añadida Animación en X'`
4. Súbelos: `git push origin feature/MiEfectoNuevo`
5. Abre y envíanos tu **Pull Request**.

---

## 📞 Soporte

Diseñado, conceptualizado y codificado con ❤️ para la comunidad audiovisual.  
Contacta al desarrollador principal a través de correo en: [alfonso.sanchez.ruizz@gmail.com](mailto:alfonso.sanchez.ruizz@gmail.com) o mediante el propio formulario nativo del sitio web.
