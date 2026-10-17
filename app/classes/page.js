import Photo, { Media } from '@/components/Photo';
import WordBand from '@/components/WordBand';
import { ArrowUpRight } from '@/components/Icons';
import { levels, classPolicy, privateSessions, contact, gripSocksPrice } from '@/lib/content';

export const metadata = {
  title: 'Classes',
  description:
    'Levelled group reformer classes (beginner, intermediate, advanced) with a maximum of 5 people, plus private 1:1 and private group sessions in Pererenan, Bali.',
  alternates: { canonical: '/classes/' },
};

export default function ClassesPage() {
  return (
    <>
      {/* Hero: copy and level shortcuts left, photograph right */}
      <section className="hero" aria-labelledby="classes-title">
        <div className="hero__copy">
          <div className="hero__intro" data-hero-copy>
            <h1 id="classes-title" className="display">
              Our Classes
            </h1>
            <p className="lead">
              45-minute group classes for a maximum of 5 people at three levels, or a private session for you or your
              own group.
            </p>
            <div className="btn-row">
              <a className="btn" href="#levels">
                Choose your level
              </a>
              <a className="btn btn--quiet" href={contact.whatsapp} target="_blank" rel="noopener">
                Ask on WhatsApp
              </a>
            </div>
          </div>
          <nav className="level-links" aria-label="Jump to a level" data-reveal>
            {levels.map((l) => (
              <a className="level-link" href={`#${l.id}`} key={l.id}>
                <span className="level-link__thumb">
                  <Photo name={l.photo} alt="" sizes="64px" />
                </span>
                <span className="level-link__text">
                  <strong>{l.name}</strong>
                  <span>Recommended for {l.level.toLowerCase()}</span>
                </span>
                <span className="level-link__arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            ))}
          </nav>
        </div>
        <div className="hero__media" data-shutter>
          <Photo name="bridge" priority sizes="(max-width: 860px) 92vw, 55vw" style={{ objectPosition: '45% 55%' }} />
        </div>
      </section>

      {/* Group classes: three levels, equal columns */}
      <section id="levels" className="section" aria-labelledby="levels-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2 id="levels-title" className="h2">
              Group classes by level
            </h2>
            <p className="lead">
              Progressive classes for all levels, in an intimate group with personalised attention to your form and goals.
            </p>
          </div>
          <div className="levels">
            {levels.map((l) => (
              <article className="level" key={l.id} id={l.id} aria-labelledby={`${l.id}-name`}>
                <Media name={l.photo} data-media-in sizes="(max-width: 600px) 92vw, (max-width: 960px) 36vw, 30vw" />
                <div className="level__head" data-reveal>
                  <h3 id={`${l.id}-name`} className="h3">
                    {l.name}
                  </h3>
                  <p className="label">Recommended for {l.level.toLowerCase()}</p>
                </div>
                <p className="prose">{l.description}</p>
                <a className="btn" href={l.url} target="_blank" rel="noopener">
                  Book {l.name}
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Studio policy, stated once */}
      <section className="section field-accent" aria-labelledby="policy-title">
        <div className="wrap split split--5-7">
          <Media name="socks" fill data-drift sizes="(max-width: 860px) 92vw, 40vw" />
          <div className="stack stack--center" data-reveal>
            <h2 id="policy-title" className="h2">
              Before you arrive
            </h2>
            <ul className="policy__list" role="list">
              <li>
                <strong>Grip socks, always</strong>
                <span>{classPolicy.studio}</span>
              </li>
              <li>
                <strong>Socks at the studio</strong>
                <span>{gripSocksPrice}</span>
              </li>
              <li>
                <strong>Cancellations</strong>
                <span>{classPolicy.cancellations}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Private sessions: two equal columns */}
      <section className="section" aria-labelledby="private-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2 id="private-title" className="h2">
              Private sessions
            </h2>
            <p className="lead">The full attention of an instructor, for you alone or for your own group.</p>
          </div>
          <div className="privates">
            {privateSessions.map((p) => (
              <article className="private" key={p.id} aria-labelledby={`${p.id}-name`}>
                <Media name={p.photo} data-media-in position="50% 35%" sizes="(max-width: 860px) 92vw, 45vw" />
                <h3 id={`${p.id}-name`} className="h3">
                  {p.name}
                </h3>
                <p className="statement">{p.lead}</p>
                <p>{p.text}</p>
                <ul className="ticks" role="list">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className="btn" href={p.url} target="_blank" rel="noopener">
                  Book on Rezerv
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>

          <div className="online-note" data-reveal>
            <p>
              <strong>Humbl Online.</strong> Online Humbl classes are coming soon.
            </p>
            <a className="link" href={contact.whatsapp} target="_blank" rel="noopener">
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <WordBand
        href={contact.whatsapp}
        word="Ask"
        title="Not sure which class is right for you?"
        text="Message us on WhatsApp and we’ll help you find the right starting point."
      />
    </>
  );
}
