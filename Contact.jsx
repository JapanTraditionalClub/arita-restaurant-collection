import { useLanguage } from '../context/LanguageContext.jsx';
import QuoteForm from '../components/QuoteForm.jsx';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section className="page-section form-page">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Contact</p>
        <h1>{t('page.contactTitle')}</h1>
        <p>{t('page.contactText')}</p>
      </div>
      <QuoteForm mode="quote" />
    </section>
  );
}
