import { useLanguage } from '../context/LanguageContext.jsx';
import ProductExplorer from '../components/ProductExplorer.jsx';

export default function Collection() {
  const { t } = useLanguage();
  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">ARITA RESTAURANT COLLECTION</p>
        <h1>{t('page.collectionTitle')}</h1>
        <p>{t('page.collectionText')}</p>
      </div>
      <ProductExplorer />
    </section>
  );
}
