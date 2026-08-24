import { useEffect } from 'react';

/**
 * Observes all elements matching `selector` within a page and adds the
 * `revealed` CSS class once they enter the viewport.
 * Supports staggered delays via a `data-delay` attribute (in milliseconds).
 */
export function useRevealOnScroll(selector = '.reveal') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}
