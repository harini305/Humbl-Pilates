'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Publishes the footer's height as --footer-h so the closing band can fill
// the rest of the screen: scrolled to the bottom, band + footer = viewport.
export default function FooterFit() {
  const pathname = usePathname();

  useEffect(() => {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    const set = () => document.documentElement.style.setProperty('--footer-h', `${footer.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(footer);
    return () => ro.disconnect();
  }, [pathname]);

  return null;
}
