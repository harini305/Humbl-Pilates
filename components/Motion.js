'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Page-level motion. Content is visible by default; GSAP only animates
// from an offset state once the script runs, and only when the visitor
// has not asked for reduced motion.
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Signature move: the hero photograph opens like a shutter.
      document.querySelectorAll('[data-shutter]').forEach((el) => {
        const img = el.querySelector('img');
        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, delay: 0.15 })
          .fromTo(img, { scale: 1.14 }, { scale: 1, duration: 1.7 }, 0.15);
      });

      // Hero copy: lines rise in sequence.
      gsap.utils.toArray('[data-hero-copy] > *').forEach((el, i) => {
        gsap.from(el, { y: 32, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.25 + i * 0.09 });
      });

      // Section entrances: children of [data-reveal] rise, staggered, once.
      gsap.utils.toArray('[data-reveal]').forEach((group) => {
        const items = group.children.length ? group.children : [group];
        gsap.from(items, {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: 'top 88%', once: true },
        });
      });

      // Photographs open upward as they enter.
      gsap.utils.toArray('[data-media-in]').forEach((el) => {
        const img = el.querySelector('img');
        const st = { trigger: el, start: 'top 90%', once: true };
        gsap.fromTo(
          el,
          { clipPath: 'inset(18% 0% 0% 0%)', opacity: 0 },
          { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.2, ease: 'expo.out', scrollTrigger: st }
        );
        if (img) gsap.fromTo(img, { scale: 1.1 }, { scale: 1, duration: 1.6, ease: 'expo.out', scrollTrigger: { ...st } });
      });

      // Slow drift on selected photographs while scrolling.
      gsap.utils.toArray('[data-drift]').forEach((el) => {
        const img = el.querySelector('img');
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -5, scale: 1.12 },
          {
            yPercent: 5,
            scale: 1.12,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      });

      // Closing band: the word rises into place.
      gsap.utils.toArray('[data-band]').forEach((band) => {
        const word = band.querySelector('[data-band-word]');
        if (!word) return;
        gsap.from(word, {
          y: 24,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: band, start: 'top 80%', once: true },
        });
      });
    });

    const refresh = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(refresh);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
