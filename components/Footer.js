import Link from 'next/link';
import { contact, nav, booking, site } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" aria-label="Humbl Pilates home">
              <img src="/images/logo.png" alt="Humbl Pilates" width="175" height="54" loading="lazy" />
            </Link>
            <p className="footer__tagline">{site.tagline}</p>
          </div>
          <div>
            <h2>Studio</h2>
            <address>
              {contact.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>
          <div>
            <h2>Contact</h2>
            <ul role="list">
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={`tel:${contact.phoneE164}`}>{contact.phoneDisplay}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Explore</h2>
            <ul role="list">
              <li><Link href="/">Home</Link></li>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
              <li>
                <a href={booking.timetable} target="_blank" rel="noopener">Timetable</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__base">
          <p>© {new Date().getFullYear()} Humbl Pilates. All rights reserved.</p>
          <p>Bookings and payments are handled by Rezerv.</p>
        </div>
      </div>
    </footer>
  );
}
