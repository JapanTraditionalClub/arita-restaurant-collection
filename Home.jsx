import { Link } from 'react-router-dom';
import { products, budgetTiers } from '../data/products.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useFilters } from '../context/FilterContext.jsx';
import ProductCard from '../components/ProductCard.jsx';

export default function Home() {
  const { t } = useLanguage();
  const { setSingleFilter } = useFilters();
  const featured = products.slice(0, 4);
  const useCases = ['mainPlate', 'sushiPlate', 'appetizer', 'kaiseki', 'sakeWare', 'breakfast', 'privateDining'];
  const cuisines = ['sushi', 'kaiseki', 'wagyu', 'seafood', 'dessert', 'sakePairing', 'hotelDining'];
  const challengeKeys = ['match', 'premium', 'reorder', 'samples', 'authentic'];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">{t('hero.kicker')}</p>
          <h1>{t('hero.title')}</h1>
          <p className="hero-copy">{t('hero.subtitle')}</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/budget">{t('cta.browseBudget')}</Link>
            <Link className="button button-ghost" to="/use-case">{t('cta.chooseUseCase')}</Link>
            <Link className="button button-light" to="/contact">{t('cta.requestB2B')}</Link>
          </div>
          <div className="trust-row">
            <span>{t('hero.trust1')}</span>
            <span>{t('hero.trust2')}</span>
            <span>{t('hero.trust3')}</span>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1400&q=80" alt="Elegant Arita ware plate with restaurant setting" />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">ARITA RESTAURANT COLLECTION</p>
          <h2>{t('sections.choose')}</h2>
          <p>{t('sections.chooseText')}</p>
        </div>
        <div className="three-column">
          <div className="chooser-block">
            <h3>{t('sections.useCase')}</h3>
            <div className="pill-grid">
              {useCases.map((key) => (
                <Link key={key} to="/use-case" className="pill-card" onClick={() => setSingleFilter('useCase', key)}>
                  {t(`valueLabels.useCase.${key}`)}
                </Link>
              ))}
            </div>
          </div>
          <div className="chooser-block wide">
            <h3>{t('sections.budget')}</h3>
            <div className="tier-grid">
              {budgetTiers.map((tier) => (
                <Link key={tier.key} to="/budget" className="tier-card" onClick={() => setSingleFilter('budget', tier.key)}>
                  <strong>{t(`valueLabels.budget.${tier.key}`)}</strong>
                  <span>{tier.range}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="chooser-block">
            <h3>{t('sections.cuisine')}</h3>
            <div className="pill-grid">
              {cuisines.map((key) => (
                <Link key={key} to="/cuisine" className="pill-card" onClick={() => setSingleFilter('cuisine', key)}>
                  {t(`valueLabels.cuisine.${key}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Collection</p>
            <h2>{t('sections.featured')}</h2>
          </div>
          <Link className="button button-ghost" to="/collection">{t('nav.collection')}</Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>{t('sections.challenges')}</h2>
        </div>
        <div className="challenge-grid">
          {challengeKeys.map((key, index) => (
            <article key={key} className="challenge-card">
              <span>0{index + 1}</span>
              <h3>{t(`cards.${key}`)}</h3>
              <p>{t(`cards.${key}Text`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading">
          <h2>{t('sections.value')}</h2>
        </div>
        <div className="value-grid">
          {['value1', 'value2', 'value3'].map((key, index) => (
            <article key={key}>
              <span>0{index + 1}</span>
              <h3>{t(`values.${key}`)}</h3>
              <p>{t(`values.${key}Text`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section center-section">
        <h2>{t('sections.contact')}</h2>
        <div className="hero-actions centered">
          <Link className="button button-dark" to="/contact">{t('cta.requestQuote')}</Link>
          <Link className="button button-ghost" to="/sample-request">{t('cta.askSample')}</Link>
          <Link className="button button-light" to="/consultation">{t('cta.discussConcept')}</Link>
        </div>
      </section>
    </>
  );
}
