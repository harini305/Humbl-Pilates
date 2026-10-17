import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap page-hero__inner">
        <h1 className="display">Page not found</h1>
        <p className="lead">The page you were looking for has moved or no longer exists.</p>
        <div className="btn-row">
          <Link className="btn" href="/">Back to home</Link>
          <Link className="btn btn--quiet" href="/classes/">See our classes</Link>
        </div>
      </div>
    </section>
  );
}
