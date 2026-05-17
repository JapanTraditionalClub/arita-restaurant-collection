import { products } from '../data/products.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useFilters } from '../context/FilterContext.jsx';
import ProductExplorer from '../components/ProductExplorer.jsx';

const cuisines = ['sushi', 'kaiseki', 'wagyu', 'seafood', 'dessert', 'sakePairing', 'hotelDining'];

export default function Cuisine() {
  const { t } = useLanguage();
  const { setSingleFilter } = useFilters();
  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Cuisine</p>
        <h1>{t('page.cuisineTitle')}</h1>
        <p>{t('page.cuisineText')}</p>
      </div>
      <div className="pill-grid page-pills">
        {cuisines.map((key) => (
          <button className="pill-card button-reset" key={key} onClick={() => setSingleFilter('cuisine', key)}>{t(`valueLabels.cuisine.${key}`)}</button>
        ))}
      </div>
      <ProductExplorer productSource={products} />
    </section>
  );
}
