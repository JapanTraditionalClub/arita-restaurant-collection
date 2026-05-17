import { useLanguage } from '../context/LanguageContext.jsx';
import QuoteForm from '../components/QuoteForm.jsx';

export default function Consultation() {
  const { t } = useLanguage();
  return (
    <section className="page-section form-page">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Consultation</p>
        <h1>{t('page.consultationTitle')}</h1>
        <p>{t('page.consultationText')}</p>
      </div>
      <QuoteForm mode="consultation" />
    </section>
  );
}
