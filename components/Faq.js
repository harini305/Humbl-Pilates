import { faq } from '@/lib/content';

export default function Faq({ groups }) {
  const shown = groups ? faq.filter((g) => groups.includes(g.group)) : faq;
  return shown.map((g) => (
    <div className="faq-group" key={g.group} data-reveal>
      <h3 className="faq-group__title">{g.group}</h3>
      <div className="faq-list">
        {g.items.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>
              {item.q}
              <span className="faq-item__icon" aria-hidden="true" />
            </summary>
            <p className="faq-item__answer">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  ));
}
