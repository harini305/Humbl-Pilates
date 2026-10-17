'use client';

import { useId, useMemo, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { packages, memberships, rupiah } from '@/lib/content';

const MIN = 1;
const MAX = 24;

// What one class costs at a given number of classes a month, from the
// published prices only. Packages cost the same per class whatever the
// frequency; memberships are unlimited, so their per-class cost falls.
function options(perMonth) {
  const packs = packages
    .filter((p) => !p.intro && p.credits <= perMonth * p.months) // usable before it expires
    .map((p) => ({
      name: p.name,
      perClass: p.price / p.credits,
      sub: `${p.credits} ${p.credits === 1 ? 'credit' : 'credits'} for ${rupiah(p.price)}`,
    }));
  const members = memberships.map((m) => ({
    name: m.name,
    perClass: m.price / m.months / perMonth,
    sub: `${rupiah(m.price / m.months)} a month, unlimited classes`,
  }));
  return [...packs, ...members].sort((a, b) => a.perClass - b.perClass);
}

export default function PriceCalculator() {
  const [n, setN] = useState(8);
  const id = useId();
  const listRef = useRef(null);
  const rows = useMemo(() => options(n), [n]);
  const best = rows[0];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = listRef.current?.querySelector('.is-best');
    if (el) gsap.fromTo(el, { scale: 0.98 }, { scale: 1, duration: 0.5, ease: 'back.out(2)' });
  }, [best?.name]);

  return (
    <div className="calc" data-reveal>
      <div className="calc__q">
        <label className="calc__label" htmlFor={`${id}-range`}>
          How often will you come?
        </label>
        <div className="stepper">
          <button type="button" onClick={() => setN((v) => Math.max(MIN, v - 1))} disabled={n <= MIN} aria-label="One class fewer">
            −
          </button>
          <output htmlFor={`${id}-range`} aria-live="polite">
            {n}
          </output>
          <button type="button" onClick={() => setN((v) => Math.min(MAX, v + 1))} disabled={n >= MAX} aria-label="One class more">
            +
          </button>
          <span className="stepper__unit">{n === 1 ? 'class' : 'classes'} a month</span>
        </div>
        <input
          id={`${id}-range`}
          type="range"
          min={MIN}
          max={MAX}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          aria-valuetext={`${n} classes a month`}
        />
      </div>

      <div className="calc__results" ref={listRef} aria-live="polite">
        {rows.slice(0, 4).map((r, i) => (
          <div key={r.name} className={`calc__row${i === 0 ? ' is-best' : ''}`}>
            <span className="calc__row-name">{r.name}</span>
            <span className="calc__row-price">{rupiah(r.perClass)} a class</span>
            <span className="calc__row-sub">{i === 0 ? `Best value at ${n} a month · ` : ''}{r.sub}</span>
          </div>
        ))}
      </div>

      <p className="calc__note">
        Worked out from the published prices; validity periods apply. New to Humbl? The Intro Package is 3 classes for
        Rp600,000.
      </p>
    </div>
  );
}
