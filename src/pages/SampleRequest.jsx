import { useLanguage } from '../context/LanguageContext.jsx';
import QuoteForm from '../components/QuoteForm.jsx';

export default function SampleRequest() {
  const { t } = useLanguage();
  return (
    <section className="page-section form-page">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Samples</p>
        <h1>{t('page.sampleTitle')}</h1>
        <p>{t('page.sampleText')}</p>
      </div>
      <QuoteForm mode="sample" />
    </section>
  );
}
