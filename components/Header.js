'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { nav, contact } from '@/lib/content';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const isCurrent = (href) => pathname === href || pathname === href.replace(/\/$/, '');

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!open) {
      document.body.classList.remove('menu-open');
      return;
    }
    document.body.classList.add('menu-open');

    const focusables = () => menu.querySelectorAll('a[href], button:not([disabled])');
    focusables()[0]?.focus();

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      gsap.fromTo(menu, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'expo.out' });
      gsap.from(menu.querySelectorAll('[data-menu-item]'), {
        y: 28,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.06,
        delay: 0.12,
      });
    }

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab') {
        const els = Array.from(focusables());
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  // "Book a class" opens the top of the Classes page. When already there,
  // a link to the same page would do nothing, so scroll back to the top.
  const toClassesTop = () => {
    if (isCurrent('/classes/')) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="wrap header__bar">
        <Link href="/" className="header__logo" aria-label="Humbl Pilates home">
          <img src="/images/logo.png" alt="Humbl Pilates" width="175" height="54" />
        </Link>
        <nav className="header__nav" aria-label="Main">
          <ul className="header__links" role="list">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="nav-link" aria-current={isCurrent(n.href) ? 'page' : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn" href="/classes/" onClick={toClassesTop}>
            Book a class
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            Menu
            <span className="menu-toggle__icon" aria-hidden="true" />
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
      >
        <div className="mobile-menu__top">
          <Link href="/" className="mobile-menu__home" onClick={close}>
            Humbl.
          </Link>
          <button type="button" className="menu-toggle" onClick={close}>
            Close
          </button>
        </div>
        <ul className="mobile-menu__links" role="list">
          <li data-menu-item>
            <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} onClick={close}>
              Home
            </Link>
          </li>
          {nav.map((n) => (
            <li key={n.href} data-menu-item>
              <Link href={n.href} aria-current={isCurrent(n.href) ? 'page' : undefined} onClick={close}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__foot" data-menu-item>
          <Link
            className="btn btn--light"
            href="/classes/"
            onClick={() => {
              close();
              toClassesTop();
            }}
          >
            Book a class
          </Link>
          <p>
            <a href={contact.whatsapp} target="_blank" rel="noopener">
              WhatsApp {contact.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </div>
    </header>
  );
}
