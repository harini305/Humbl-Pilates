import Link from 'next/link';
import { Media } from '@/components/Photo';
import PriceCalculator from '@/components/PriceCalculator';
import WordBand from '@/components/WordBand';
import Faq from '@/components/Faq';
import { ArrowUpRight } from '@/components/Icons';
import { packages, memberships, membershipTerms, gripSocksPrice, booking, contact, rupiah } from '@/lib/content';

export const metadata = {
  title: 'Pricing & Membership',
  description:
    'Class packages from Rp280,000 and unlimited memberships at Humbl Pilates, Pererenan, Bali. Compare the cost per class and buy on Rezerv.',
  alternates: { canonical: '/pricing/' },
};

// The intro offer leads, then packages from smallest to largest.
const orderedPackages = [...packages.filter((p) => p.intro), ...packages.filter((p) => !p.intro)];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="pricing-title">
        <div className="wrap split">
          <div className="stack" data-hero-copy>
            <h1 id="pricing-title" className="display">
              Membership &amp; Pricing
            </h1>
            <p className="lead">Choose the plan that fits your journey. Every package and membership is bought on Rezerv.</p>
            <div className="btn-row">
              <a className="btn" href={booking.packages} target="_blank" rel="noopener">
                Buy on Rezerv
                <ArrowUpRight />
              </a>
              <a className="btn btn--quiet" href={booking.timetable} target="_blank" rel="noopener">
                See the timetable
              </a>
            </div>
            <Media
              name="lunge"
              className="media--land"
              data-shutter
              priority
              position="50% 40%"
              sizes="(max-width: 860px) 92vw, 45vw"
            />
          </div>
          <PriceCalculator />
        </div>
      </section>

      {/* Class packages: five cards, the intro offer first */}
      <section className="section section--flush-top" id="packages" aria-labelledby="packages-title">
        <div className="wrap">
          <div className="section-head section-head--row" data-reveal>
            <div>
              <h2 id="packages-title" className="h2">
                Class packages
              </h2>
              <p className="lead">Buy a set of class credits once, then book any group class on Rezerv.</p>
            </div>
            <span className="small">One time payment · prices in IDR</span>
          </div>
          <ul className="packs" role="list" data-reveal>
            {orderedPackages.map((p) => (
              <li className={`pack${p.intro ? ' pack--intro' : ''}`} key={p.name}>
                <p className="pack__credits">
                  <strong>{p.credits}</strong> {p.credits === 1 ? 'class' : 'classes'}
                </p>
                <h3 className="pack__name">{p.name}</h3>
                <p className="pack__price">{rupiah(p.price)}</p>
                <p className="pack__per">{rupiah(p.price / p.credits)} per class</p>
                <p className="pack__validity">
                  {p.validity}
                  {p.intro && <strong className="pack__note">For your first two weeks at Humbl.</strong>}
                </p>
                <a
                  className={`btn ${p.intro ? 'btn--light' : 'btn--quiet'} pack__btn`}
                  href={booking.packages}
                  target="_blank"
                  rel="noopener"
                >
                  Buy now
                  <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Memberships: photograph and list share one row height */}
      <section className="section field-surface" id="memberships" aria-labelledby="members-title">
        <div className="wrap split split--5-7">
          <Media name="bridge" fill data-media-in sizes="(max-width: 860px) 92vw, 40vw" />
          <div className="stack stack--center">
            <div className="section-head" style={{ marginBottom: 'var(--space-s)' }} data-reveal>
              <h2 id="members-title" className="h2">
                Memberships
              </h2>
              <p className="lead">{membershipTerms}</p>
            </div>
            <ul className="menu-list" style={{ gridTemplateColumns: '1fr' }} role="list" data-reveal>
              {memberships.map((m) => (
                <li className="menu-item" key={m.name}>
                  <span className="credit-tile credit-tile--member" aria-hidden="true">
                    <strong>{m.months}</strong>
                    <span>{m.months === 1 ? 'month' : 'months'}</span>
                  </span>
                  <div className="menu-item__body">
                    <div className="menu-item__top">
                      <h3 className="menu-item__name">{m.name}</h3>
                      <span className="menu-item__price">{rupiah(m.price)}</span>
                    </div>
                    <p className="menu-item__desc">{m.validity}. Unlimited classes.</p>
                    <a className="link" href={booking.packages} target="_blank" rel="noopener">
                      Buy now
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="small" data-reveal>
              {gripSocksPrice}
            </p>
          </div>
        </div>
      </section>

      <section className="section field-accent" aria-labelledby="timetable-title">
        <div className="wrap split split--7-5 split--center">
          <Media name="studio" className="media--wide" data-drift sizes="(max-width: 860px) 92vw, 55vw" />
          <div className="stack" data-reveal>
            <h2 id="timetable-title" className="h2">
              Plan your week
            </h2>
            <p className="lead">The live class schedule is on Rezerv, where you can see every class and book your place.</p>
            <div>
              <a className="btn btn--light" href={booking.timetable} target="_blank" rel="noopener">
                Check the schedule
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap faq-layout">
          <div className="faq-layout__head" data-reveal>
            <h2 id="faq-title" className="h2">
              Booking questions
            </h2>
            <p className="lead">Cancellations, payment and how long your package lasts.</p>
            <Link className="link" href="/about/#faq">
              All questions
            </Link>
            <Media name="socks" className="media--land faq-media" data-media-in sizes="(max-width: 860px) 92vw, 35vw" />
          </div>
          <div>
            <Faq groups={['Booking & packages']} />
          </div>
        </div>
      </section>

      <WordBand
        href={contact.whatsapp}
        word="Ask"
        title="Not sure which package is right for you?"
        text="We’re here to help you choose the right option for your goals and schedule."
      />
    </>
  );
}
