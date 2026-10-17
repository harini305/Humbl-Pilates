'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { levels, classPolicy } from '@/lib/content';
import { Media } from './Photo';
import { ArrowUpRight } from './Icons';

// The three group levels as tabs (WAI-ARIA tabs pattern). All panels are
// in the markup; the Classes page shows every level in full.
export default function LevelTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const mediaRef = useRef(null);
  const panelRef = useRef(null);

  const select = (i, focus = false) => {
    if (i === active) return;
    setActive(i);
    if (focus) tabRefs.current[i]?.focus();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    requestAnimationFrame(() => {
      const arch = mediaRef.current?.querySelector(`[data-level="${i}"]`);
      if (arch) {
        gsap.fromTo(arch, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.out' });
        gsap.fromTo(arch.querySelector('img'), { scale: 1.12 }, { scale: 1, duration: 1.2, ease: 'expo.out' });
      }
      const panel = panelRef.current?.querySelector(`[data-panel="${i}"]`);
      if (panel) gsap.from(panel.children, { y: 16, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.05 });
    });
  };

  const onKeyDown = (e) => {
    const n = levels.length;
    if (e.key === 'ArrowRight') select((active + 1) % n, true);
    else if (e.key === 'ArrowLeft') select((active - 1 + n) % n, true);
    else if (e.key === 'Home') select(0, true);
    else if (e.key === 'End') select(n - 1, true);
    else return;
    e.preventDefault();
  };

  return (
    <div className="split">
      <div className="showcase__media" ref={mediaRef}>
        {levels.map((l, i) => (
          <Media
            key={l.id}
            name={l.photo}
            data-level={i}
            sizes="(max-width: 860px) 92vw, 45vw"
            style={{ zIndex: i === active ? 2 : 1, visibility: i === active ? 'visible' : 'hidden' }}
            alt={i === active ? undefined : ''}
            aria-hidden={i === active ? undefined : true}
          />
        ))}
      </div>

      <div className="showcase__body" ref={panelRef}>
        <div className="tabs" role="tablist" aria-label="Group class levels" onKeyDown={onKeyDown}>
          {levels.map((l, i) => (
            <button
              key={l.id}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`tab-${l.id}`}
              className="tab"
              aria-selected={i === active}
              aria-controls={`panel-${l.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
            >
              {l.level}
            </button>
          ))}
        </div>

        {levels.map((l, i) => (
          <div
            key={l.id}
            id={`panel-${l.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${l.id}`}
            className="tab-panel"
            hidden={i !== active}
            data-panel={i}
          >
            <h3 className="h2">{l.name}</h3>
            <p className="meta">
              {classPolicy.duration} · {classPolicy.size} · Recommended for {l.level.toLowerCase()}
            </p>
            <p className="lead">{l.short}</p>
            <div className="showcase__actions">
              <a className="btn" href={l.url} target="_blank" rel="noopener">
                Book {l.name}
                <ArrowUpRight />
              </a>
              <Link className="btn btn--quiet" href="/classes/">
                Compare all levels
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
