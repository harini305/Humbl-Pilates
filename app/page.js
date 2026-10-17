import Link from 'next/link';
import Photo, { Media } from '@/components/Photo';
import LevelTabs from '@/components/LevelTabs';
import WordBand from '@/components/WordBand';
import { ArrowUpRight } from '@/components/Icons';
import { contact, intro, privateSessions, testimonials, site, rupiah, packages } from '@/lib/content';

export const metadata = {
  title: { absolute: 'Humbl Pilates · Boutique Reformer Studio in Pererenan, Bali' },
  description:
    'Reformer Pilates in Pererenan, Bali. A boutique studio with intimate, levelled classes on just five reformers, plus private sessions. Book on Rezerv.',
  alternates: { canonical: '/' },
};

const casual = packages.find((p) => p.credits === 1);

const offerings = [
  {
    name: 'Levelled group classes',
    photo: 'ring',
    desc: 'Beginner, intermediate and advanced. Maximum 5 people per class, 45-minute sessions.',
    price: `From ${rupiah(casual.price)}`,
    href: '/classes/',
    cta: 'See the three levels',
  },
  ...privateSessions.map((p) => ({
    name: p.name,
    photo: p.photo,
    desc: p.lead,
    href: p.url,
    cta: 'Book on Rezerv',
    external: true,
  })),
  {
    name: 'Humbl Online',
    photo: 'bridge',
    desc: 'Online Humbl classes.',
    note: 'Coming soon',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: copy and studio details left, main photograph right */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <div className="hero__intro" data-hero-copy>
            <h1 id="hero-title" className="display">
              The Humbl Method
            </h1>
            <p className="lead">
              Reformer Pilates in Pererenan, Bali. Boutique studio. Intimate classes. Just five reformers.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/classes/">
                Book a class
              </Link>
              <Link className="btn btn--quiet" href="/classes/">
                Find your level
              </Link>
            </div>
          </div>
          <div className="hero__studio" data-reveal>
            <Media name="studio" className="media--land" priority sizes="(max-width: 860px) 45vw, 18vw" />
            <Media name="socks" className="media--land" priority sizes="(max-width: 860px) 45vw, 18vw" />
            <div className="hero__visit">
              <p className="hero__visit-title">Visit the studio</p>
              <p>
                {contact.address[0]}
                <br />
                Pererenan, Bali
              </p>
              <a className="link" href={contact.mapLink} target="_blank" rel="noopener">
                Get directions
              </a>
            </div>
          </div>
        </div>
        <div className="hero__media" data-shutter>
          <Photo name="hero" priority sizes="(max-width: 860px) 92vw, 55vw" />
        </div>
      </section>

      {/* Studio facts */}
      <section className="hero-facts" aria-label="Studio at a glance">
        <ul className="wrap hero-facts__list" role="list" data-reveal>
          <li>
            <strong>5</strong>
            <span>reformers, so never more than 5 people in a class</span>
          </li>
          <li>
            <strong>45 min</strong>
            <span>levelled group classes</span>
          </li>
          <li>
            <strong>3 levels</strong>
            <span>beginner, intermediate and advanced</span>
          </li>
          <li>
            <strong>1:1</strong>
            <span>private and private group sessions</span>
          </li>
        </ul>
      </section>

      {/* About: photograph and text share one row height */}
      <section className="section" aria-labelledby="about-title">
        <div className="wrap split split--5-7">
          <Media name="straps" fill data-media-in sizes="(max-width: 860px) 92vw, 40vw" />
          <div className="stack">
            <div className="stack" data-reveal>
              <h2 id="about-title" className="h2">
                About Humbl
              </h2>
              <p className="statement">
                A boutique reformer studio in the heart of Pererenan, with just five reformers.
              </p>
            </div>
            <div className="prose" data-reveal>
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="founder" data-reveal>
              <h3 className="h3">Founder</h3>
              <p>{intro.founder}</p>
              <Link className="link" href="/about/">
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="section field-surface" aria-labelledby="levels-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2 id="levels-title" className="h2">
              Three levels, one method
            </h2>
            <p className="lead">Choose your level and progress at your own pace with expert guidance.</p>
          </div>
          <LevelTabs />
        </div>
      </section>

      {/* What we offer */}
      <section className="section" aria-labelledby="offer-title">
        <div className="wrap">
          <div className="section-head section-head--row" data-reveal>
            <h2 id="offer-title" className="h2">
              What we offer
            </h2>
            <Link className="link" href="/pricing/">
              Packages and memberships
            </Link>
          </div>
          <ul className="menu-list" role="list" data-reveal>
            {offerings.map((o) => (
              <li className="menu-item" key={o.name}>
                <span className="thumb">
                  <Photo name={o.photo} alt="" sizes="72px" />
                </span>
                <div className="menu-item__body">
                  <div className="menu-item__top">
                    <h3 className="menu-item__name">{o.name}</h3>
                    {o.price && <span className="menu-item__price">{o.price}</span>}
                  </div>
                  <p className="menu-item__desc">{o.desc}</p>
                  {o.note && <p className="menu-item__note">{o.note}</p>}
                  {o.href &&
                    (o.external ? (
                      <a className="link" href={o.href} target="_blank" rel="noopener">
                        {o.cta}
                      </a>
                    ) : (
                      <Link className="link" href={o.href}>
                        {o.cta}
                      </Link>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section field-surface" aria-labelledby="voices-title">
        <div className="wrap split split--5-7">
          <Media name="bridge" fill data-drift sizes="(max-width: 860px) 92vw, 40vw" />
          <div className="quotes">
            <h2 id="voices-title" className="h2" data-reveal>
              In our clients’ words
            </h2>
            <figure className="quote" data-reveal>
              <blockquote>
                <p>{testimonials.monisha.text}</p>
              </blockquote>
              <figcaption>
                <strong>{testimonials.monisha.author}</strong>
              </figcaption>
            </figure>
            <figure className="quote quote--small" data-reveal>
              <blockquote>
                <p>{testimonials.tori.text}</p>
              </blockquote>
              <figcaption>
                <strong>{testimonials.tori.author}</strong>
              </figcaption>
            </figure>
            <figure className="quote quote--small" data-reveal>
              <blockquote>
                <p>{testimonials.jessica.text}</p>
              </blockquote>
              <figcaption>
                <strong>{testimonials.jessica.author}</strong> · {testimonials.jessica.sub}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Visit: details and map share one row height */}
      <section className="section" aria-labelledby="visit-title">
        <div className="wrap split split--7-5">
          <div className="stack stack--center">
            <div className="section-head" style={{ marginBottom: 'var(--space-s)' }} data-reveal>
              <h2 id="visit-title" className="h2">
                Where to find us
              </h2>
              <p className="lead">In the heart of Pererenan, Bali.</p>
            </div>
            <div className="visit__facts" data-reveal>
              <div>
                <h3>Studio</h3>
                <address>
                  {contact.address.map((l) => (
                    <span key={l}>
                      {l}
                      <br />
                    </span>
                  ))}
                </address>
                <a className="link" href={contact.mapLink} target="_blank" rel="noopener">
                  Open in Google Maps
                </a>
              </div>
              <div>
                <h3>Studio hours</h3>
                <dl>
                  {contact.hours.map((h) => (
                    <div key={h.days}>
                      <dt>{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3>Contact</h3>
                <p>
                  <a className="link" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                  <br />
                  <a className="link" href={`tel:${contact.phoneE164}`}>
                    {contact.phoneDisplay}
                  </a>
                </p>
              </div>
              <div>
                <a className="btn btn--ink" href={contact.whatsapp} target="_blank" rel="noopener">
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="visit__map" data-media-in>
            <iframe
              src={contact.mapEmbed}
              title="Map showing Humbl Pilates on Jl. Pantai Pererenan"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <WordBand
        href="/classes/"
        external={false}
        word="Book"
        title="Ready to begin your journey?"
        text={`Choose your level and book your first class. ${site.tagline}`}
      />
    </>
  );
}
