/**
 * Constantes del proyecto
 * Centraliza configuraciones y valores reutilizables
 */

// Colores de la marca
export const BRAND_COLORS = {
    primary: 'rgb(255,43,57)',
    white: '#ffffff',
    black: '#000000',
} as const;

// Configuración del menú
export const MENU_ITEMS = [
    {
        text: "PROYECTOS",
        href: "#proyectos"
    },
    {
        text: "CONTACTO",
        href: "#contacto"
    }
] as const;

// Configuración de proyectos
export const PROYECTOS = [
    {
        id: 'vermut',
        src: "/assets/vermut.webp",
        alt: "Proyecto Vermut",
        youtube: "https://www.youtube.com/watch?v=5iG0sdvTcjQ"
    },
    {
        id: 'pack',
        src: "/assets/pack.png",
        alt: "Proyecto Pack",
        youtube: "https://www.youtube.com/watch?v=go7UmQBKwyI"
    },
    {
        id: 'molotoff',
        src: "/assets/molotoff.png",
        alt: "Proyecto Molotoff",
        youtube: "https://www.youtube.com/watch?v=I860q8Y1QYI"
    },
    {
        id: 'mia',
        src: "/assets/mia.png",
        alt: "Proyecto Mia",
        youtube: "https://www.youtube.com/watch?v=km439spbPPY"
    },
    {
        id: 'losmismos',
        src: "/assets/losmismos.png",
        alt: "Proyecto Los Mismos",
        youtube: "https://www.youtube.com/watch?v=uUdJ0Xhs2bY"
    },
    {
        id: 'imagen8',
        src: "/assets/imagen8.webp",
        alt: "Proyecto Imagen 8",
        youtube: "https://www.youtube.com/watch?v=IffSrqln3S0"
    },
    {
        id: 'imagen5',
        src: "/assets/imagen5.webp",
        alt: "Proyecto Imagen 5",
        youtube: "https://www.youtube.com/watch?v=McFunudGajI"
    },
    {
        id: 'imagen6',
        src: "/assets/imagen6.webp",
        alt: "Proyecto Imagen 6",
        youtube: "https://www.youtube.com/watch?v=ltO0-YYpuJ8"
    },
    {
        id: 'deambulando',
        src: "/assets/deambulando.png",
        alt: "Proyecto Deambulando",
        youtube: "https://www.youtube.com/watch?v=IsK-9O-MHy8"
    },
    {
        id: 'demasiado',
        src: "/assets/demasiado.png",
        alt: "Proyecto Demasiado",
        youtube: "https://www.youtube.com/watch?v=RLPGVy0SUEI"
    },
    {
        id: 'cuchillas',
        src: "/assets/cuchillas.webp",
        alt: "Proyecto Cuchillas",
        youtube: "https://www.youtube.com/watch?v=F3DPQYdJPbI"
    }
] as const;

// Configuración del carousel
export const CAROUSEL_CONFIG = {
    swiper: {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
        },
        loop: true,
        grabCursor: true,
        centeredSlides: false,
        autoplay: { 
            delay: 3500, 
            disableOnInteraction: false 
        }
    }
} as const;

// Configuración de formularios
export const FORM_CONFIG = {
    contact: {
        fields: [
            { id: 'name', type: 'text', label: 'Nombre', required: true },
            { id: 'email', type: 'email', label: 'Email', required: true },
            { id: 'message', type: 'textarea', label: 'Mensaje', required: true, rows: 6 }
        ]
    }
} as const;

// Configuración de API
export const API_ENDPOINTS = {
    contact: '/api/contact',
    stripe: {
        prices: '/api/stripe-prices',
        session: '/api/stripe-session'
    }
} as const;

// Configuración de animaciones
export const ANIMATION_CONFIG = {
    duration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms'
    },
    easing: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
} as const; 