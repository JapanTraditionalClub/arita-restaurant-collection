import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { formatPriceRange, getLocalized } from '../utils/format.js';
import ProductCard from '../components/ProductCard.jsx';

export default function ProductDetail() {
  const { productId } = useParams();
  const { t, language } = useLanguage();
  const { addItem } = useSelection();
  const product = products.find((entry) => entry.id === productId) || products[0];
  const related = products.filter((entry) => entry.id !== product.id && entry.cuisines.some((cuisine) => product.cuisines.includes(cuisine))).slice(0, 3);

  return (
    <section className="page-section">
      <Link className="back-link" to="/collection">← {t('page.detailBack')}</Link>
      <div className="product-detail">
        <div className="detail-image"><img src={product.image} alt={product.alt} /></div>
        <div className="detail-content">
          <p className="eyebrow">{product.kiln}</p>
          <h1>{product.name}</h1>
          <p className="lead-text">{getLocalized(product, 'description', language)}</p>
          <dl className="detail-list">
            <div><dt>{t('product.price')}</dt><dd>{formatPriceRange(product.priceMin, product.priceMax)} / piece</dd></div>
            <div><dt>{t('product.size')}</dt><dd>{product.size}</dd></div>
            <div><dt>{t('product.moq')}</dt><dd>From {product.moq} pieces</dd></div>
            <div><dt>{t('product.useCase')}</dt><dd>{product.useCases.map((key) => t(`valueLabels.useCase.${key}`)).join(', ')}</dd></div>
            <div><dt>{t('product.cuisine')}</dt><dd>{product.cuisines.map((key) => t(`valueLabels.cuisine.${key}`)).join(', ')}</dd></div>
            <div><dt>{t('product.scene')}</dt><dd>{getLocalized(product, 'scene', language)}</dd></div>
            <div><dt>{t('product.shipping')}</dt><dd>{t('product.yes')}</dd></div>
          </dl>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => addItem(product)}>{t('cta.addToQuote')}</button>
            <button className="button button-ghost" onClick={() => addItem(product, { sampleRequested: true })}>{t('cta.askSample')}</button>
          </div>
        </div>
      </div>
      <section className="section compact-section">
        <div className="section-heading"><h2>{t('sections.related')}</h2></div>
        <div className="product-grid">{related.map((entry) => <ProductCard key={entry.id} product={entry} />)}</div>
      </section>
    </section>
  );
}
