import { Media } from '@/components/Photo';
import WordBand from '@/components/WordBand';
import Faq from '@/components/Faq';
import { about, intro, testimonials, contact } from '@/lib/content';

export const metadata = {
  title: 'About & FAQ',
  description:
    'The story of Humbl Pilates, a boutique reformer studio in Pererenan, Bali founded by Demi Geary, plus answers to common questions about booking and your first class.',
  alternates: { canonical: '/about/' },
};

const voices = [testimonials.bhavana, testimonials.olivia, testimonials.jessica];
const founderSentences = intro.founder.split('. ');

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }} aria-labelledby="about-title">
        <div className="wrap">
          <div className="section-head section-head--row" style={{ marginBottom: 0 }} data-hero-copy>
            <h1 id="about-title" className="display">
              About Humbl Pilates
            </h1>
            <p className="lead">Where precision meets personalisation in the heart of Pererenan.</p>
          </div>
          <Media
            name="studio"
            className="media--wide about-hero__media"
            data-shutter
            priority
            sizes="(max-width: 1400px) 92vw, 1280px"
          />
        </div>
      </section>

      {/* Our story: text and photograph share one row height */}
      <section className="section" aria-labelledby="story-title">
        <div className="wrap split split--7-5 split--media-last">
          <div className="stack stack--center">
            <div className="stack" data-reveal>
              <h2 id="story-title" className="h2">
                Our story
              </h2>
              <p className="lead" style={{ maxWidth: '56ch' }}>{about.story[0]}</p>
            </div>
            <div className="prose" data-reveal>
              <p>{about.story[1]}</p>
              <p>{about.story[2]}</p>
            </div>
          </div>
          <Media name="story" fill data-media-in sizes="(max-width: 860px) 92vw, 38vw" />
        </div>
      </section>

      <section className="section field-accent" aria-labelledby="method-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2 id="method-title" className="h2">
              The Humbl Method
            </h2>
            <p className="lead">Four principles that define our approach to movement and well-being.</p>
          </div>
          <div className="principles" data-reveal>
            {about.principles.map((p) => (
              <div className="principle" key={p.title}>
                <h3 className="h3">{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder (confirmed facts only) */}
      <section className="section" aria-labelledby="founder-title">
        <div className="wrap split split--5-7 split--center">
          <div className="stack" data-reveal>
            <h2 id="founder-title" className="h2">
              Demi Geary
            </h2>
            <p className="label">Founder &amp; Lead Instructor</p>
          </div>
          <div className="prose" data-reveal>
            <p className="statement">{founderSentences[0]}.</p>
            <p>{founderSentences.slice(1).join('. ')}</p>
          </div>
        </div>
      </section>

      {/* Studio gallery: three equal photographs */}
      <section className="section field-surface" aria-labelledby="studio-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2 id="studio-title" className="h2">
              Our studio
            </h2>
            <p className="lead">
              Five reformers, arched mirrors and natural light: a thoughtfully designed space for your practice.
            </p>
          </div>
          <div className="gallery">
            <Media name="lunge" data-media-in sizes="(max-width: 700px) 92vw, 30vw" />
            <Media name="ring" data-media-in sizes="(max-width: 700px) 46vw, 30vw" />
            <Media name="sideKneel" data-media-in sizes="(max-width: 700px) 46vw, 30vw" />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="voices-title">
        <div className="wrap">
          <h2 id="voices-title" className="h2 section-head" data-reveal>
            In our clients’ words
          </h2>
          <div className="voices" data-reveal>
            {voices.map((v) => (
              <figure className="quote quote--small" key={v.author}>
                <blockquote>
                  <p>{v.text}</p>
                </blockquote>
                <figcaption>
                  <strong>{v.author}</strong>
                  {v.sub && <> · {v.sub}</>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section field-surface" aria-labelledby="faq-title">
        <div className="wrap faq-layout">
          <div className="faq-layout__head" data-reveal>
            <h2 id="faq-title" className="h2">
              Questions, answered
            </h2>
            <p className="lead">Something else on your mind? We reply on WhatsApp.</p>
            <a className="link" href={contact.whatsapp} target="_blank" rel="noopener">
              Message us on WhatsApp
            </a>
          </div>
          <div>
            <Faq />
          </div>
        </div>
      </section>

      <WordBand
        href="/classes/"
        external={false}
        word="Book"
        title="Ready to visit Humbl?"
        text="We’d love to welcome you to the studio. Choose your level and book your first class."
      />
    </>
  );
}
