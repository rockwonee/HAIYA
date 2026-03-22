// src/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an anchor (e.g. /about#team), scroll to it
    if (hash) {
      // delay to ensure the new page content is in the DOM (iOS Safari quirk)
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    // Otherwise, scroll to top (use rAF to beat iOS address-bar resizing)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname, hash]);

  return null;
}
