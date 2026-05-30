import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { formatPriceRange, getLocalized } from '../utils/format.js';

export default function QuickViewModal({ product, onClose }) {
  const { t, language } = useLanguage();
  const { addItem } = useSelection();

  if (!product) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="quick-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <button className="icon-button close-button" onClick={onClose} aria-label="Close">×</button>
        <img src={product.image} alt={product.alt} />
        <div>
          <p className="small-label">{product.kiln}</p>
          <h2>{product.name}</h2>
          <p>{getLocalized(product, 'description', language)}</p>
          <p className="price-line">{formatPriceRange(product.priceMin, product.priceMax)} / piece</p>
          <p><strong>{t('product.moq')}:</strong> From {product.moq} pieces</p>
          <p><strong>{t('product.bestFor')}:</strong> {product.useCases.map((key) => t(`valueLabels.useCase.${key}`)).join(', ')}</p>
          <div className="modal-actions">
            <button className="button button-dark" onClick={() => addItem(product)}>{t('cta.addToQuote')}</button>
            <Link className="button button-ghost" to={`/product/${product.id}`}>{t('cta.viewDetails')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
