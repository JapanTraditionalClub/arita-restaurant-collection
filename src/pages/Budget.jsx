import { budgetTiers, products } from '../data/products.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useFilters } from '../context/FilterContext.jsx';
import ProductExplorer from '../components/ProductExplorer.jsx';

const notes = {
  entry: 'Lunch, casual Japanese, and test introductions.',
  standard: 'Core pieces for high-value restaurants.',
  premium: 'Sushi, kaiseki, hotel dining, and dinner courses.',
  signature: 'Hero plates, VIP rooms, and photo-worthy dishes.',
  bespoke: 'Custom selections and whole-restaurant planning.'
};

export default function Budget() {
  const { t } = useLanguage();
  const { setSingleFilter } = useFilters();
  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Budget</p>
        <h1>{t('page.budgetTitle')}</h1>
        <p>{t('page.budgetText')}</p>
      </div>
      <div className="tier-grid page-tiers">
        {budgetTiers.map((tier) => (
          <button key={tier.key} className="tier-card button-reset" onClick={() => setSingleFilter('budget', tier.key)}>
            <strong>{t(`valueLabels.budget.${tier.key}`)}</strong>
            <span>{tier.range}</span>
            <small>{notes[tier.key]}</small>
          </button>
        ))}
      </div>
      <ProductExplorer productSource={products} />
    </section>
  );
}
