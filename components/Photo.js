import { photos } from '@/lib/content';

// Pre-generated WebP sizes (scripts/optimize-images.py). Next image
// optimisation is off, so the srcset is written by hand.
export default function Photo({ name, sizes = '(max-width: 860px) 90vw, 40vw', priority = false, className, alt, ...rest }) {
  const p = photos[name];
  const max = p.widths[p.widths.length - 1];
  return (
    <img
      src={`/images/${p.slug}-${p.widths[1] ?? max}.webp`}
      srcSet={p.widths.map((w) => `/images/${p.slug}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width={max}
      height={Math.round(max * 1.25)}
      alt={alt ?? p.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      {...rest}
    />
  );
}

// A rectangular photo frame. `fill` makes it stretch to the height of its
// grid row on wide screens, so it lines up with the text beside it.
// `position` sets the crop focus (CSS object-position).
export function Media({ name, className = '', sizes, priority, alt, fill = false, position, ...rest }) {
  return (
    <div className={`media${fill ? ' media--fill' : ''} ${className}`} {...rest}>
      <Photo name={name} sizes={sizes} priority={priority} alt={alt} style={position ? { objectPosition: position } : undefined} />
    </div>
  );
}
