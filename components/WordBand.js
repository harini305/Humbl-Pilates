import Link from 'next/link';
import { ArrowUpRight } from './Icons';

// The closing call to action: the whole band is one link, the verb is the
// button. Compact, so the band and the footer fit on one screen.
export default function WordBand({ href, word, title, text, external = true }) {
  const Tag = external ? 'a' : Link;
  return (
    <Tag
      className="word-band"
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      data-band
    >
      <span className="word-band__inner">
        <span className="word-band__text">
          <strong>{title}</strong>
          {text}
        </span>
        <span className="word-band__action">
          <span className="word-band__word" aria-hidden="true" data-band-word>
            {word}
          </span>
          <ArrowUpRight className="word-band__arrow" />
        </span>
      </span>
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </Tag>
  );
}
