import { useLanguage } from '../context/LanguageContext.jsx';

export default function FAQ() {
  const { t } = useLanguage();
  const items = Array.from({ length: 8 }, (_, index) => index + 1);
  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">FAQ</p>
        <h1>{t('nav.faq')}</h1>
      </div>
      <div className="faq-list">
        {items.map((number) => (
          <details key={number} open={number === 1}>
            <summary>{t(`faq.q${number}`)}</summary>
            <p>{t(`faq.a${number}`)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
