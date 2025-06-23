/**
 * Utilidades y funciones helper
 * Funciones reutilizables para el proyecto
 */

/**
 * Valida si un email tiene formato válido
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Formatea una fecha a formato legible
 */
export function formatDate(date: Date, locale: string = 'es-ES'): string {
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

/**
 * Hace scroll suave a un elemento
 */
export function smoothScrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Hace scroll suave al inicio de la página
 */
export function scrollToTop(): void {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Debounce function para optimizar eventos
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/**
 * Throttle function para limitar la frecuencia de ejecución
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Sanitiza texto para prevenir XSS
 */
export function sanitizeText(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Genera un ID único
 */
export function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
}

/**
 * Verifica si el dispositivo es móvil
 */
export function isMobile(): boolean {
    return window.innerWidth < 768;
}

/**
 * Verifica si el dispositivo es tablet
 */
export function isTablet(): boolean {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
}

/**
 * Verifica si el dispositivo es desktop
 */
export function isDesktop(): boolean {
    return window.innerWidth >= 1024;
} 