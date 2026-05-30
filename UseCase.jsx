import { products } from '../data/products.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useFilters } from '../context/FilterContext.jsx';
import ProductExplorer from '../components/ProductExplorer.jsx';

const useCases = ['mainPlate', 'sushiPlate', 'appetizer', 'kaiseki', 'sakeWare', 'hotelDining', 'courseMenu'];

export default function UseCase() {
  const { t } = useLanguage();
  const { setSingleFilter } = useFilters();
  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Use Case</p>
        <h1>{t('page.useCaseTitle')}</h1>
        <p>{t('page.useCaseText')}</p>
      </div>
      <div className="pill-grid page-pills">
        {useCases.map((key) => (
          <button className="pill-card button-reset" key={key} onClick={() => setSingleFilter('useCase', key)}>{t(`valueLabels.useCase.${key}`)}</button>
        ))}
      </div>
      <ProductExplorer productSource={products} />
    </section>
  );
}
