import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { formatPriceRange } from '../utils/format.js';

export default function ProductCard({ product, onQuickView }) {
  const { t } = useLanguage();
  const { addItem } = useSelection();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className="product-badge">{t(`valueLabels.budget.${product.budget}`)}</span>
      </div>
      <div className="product-card-body">
        <p className="small-label">{product.kiln}</p>
        <h3>{product.name}</h3>
        <p className="price-line">{formatPriceRange(product.priceMin, product.priceMax)} / piece</p>
        <p className="meta-line"><strong>{t('product.bestFor')}:</strong> {product.cuisines.slice(0, 2).map((key) => t(`valueLabels.cuisine.${key}`)).join(', ')}</p>
        <p className="meta-line"><strong>{t('product.moq')}:</strong> From {product.moq} pieces</p>
        <p className="meta-line"><strong>{t('product.sample')}:</strong> {product.sampleAvailable ? t('product.sampleAvailable') : t('product.consultation')}</p>
        <div className="card-actions">
          <Link className="button button-ghost" to={`/product/${product.id}`}>{t('cta.viewDetails')}</Link>
          <button className="button button-dark" onClick={() => addItem(product)}>{t('cta.addToQuote')}</button>
          <button className="button button-text" onClick={() => addItem(product, { sampleRequested: true })}>{t('cta.askSample')}</button>
        </div>
        {onQuickView && <button className="quick-link" onClick={() => onQuickView(product)}>{t('cta.quickView')}</button>}
      </div>
    </article>
  );
}
