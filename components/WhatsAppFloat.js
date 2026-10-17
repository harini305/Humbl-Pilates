'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { contact } from '@/lib/content';
import { WhatsAppIcon } from './Icons';

// Floating WhatsApp link. It tucks away while the closing call to action
// or the footer is on screen, so it never covers them.
export default function WhatsAppFloat() {
  const ref = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll('[data-band], .footer');
    if (!targets.length) return;
    const visible = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      ref.current?.classList.toggle('is-tucked', visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <a
      ref={ref}
      className="wa-float"
      href={contact.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Message Humbl Pilates on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon />
    </a>
  );
}
