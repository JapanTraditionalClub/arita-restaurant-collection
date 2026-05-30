import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { formatPriceRange, formatYen } from '../utils/format.js';

export default function SelectionList() {
  const { t } = useLanguage();
  const { selectedProducts, totals, updateQuantity, removeItem, toggleSample } = useSelection();

  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Quote Cart</p>
        <h1>{t('page.selectionTitle')}</h1>
        <p>{t('cart.subtitle')}</p>
      </div>

      {selectedProducts.length === 0 ? (
        <div className="empty-state wide-empty">
          <h2>{t('cart.empty')}</h2>
          <p>{t('cart.emptyText')}</p>
          <Link className="button button-dark" to="/budget">{t('cta.startBudget')}</Link>
          <Link className="button button-ghost" to="/use-case">{t('cta.startUseCase')}</Link>
        </div>
      ) : (
        <div className="selection-page-grid">
          <div className="selection-list">
            {selectedProducts.map(({ product, quantity, sampleRequested }) => (
              <article className="selection-card" key={product.id}>
                <img src={product.image} alt={product.alt} />
                <div>
                  <h2>{product.name}</h2>
                  <p>{formatPriceRange(product.priceMin, product.priceMax)} / piece</p>
                  <p>{t('product.moq')}: From {product.moq} pieces</p>
                  <label className="qty-row">{t('product.quantity')}<input min="1" type="number" value={quantity} onChange={(event) => updateQuantity(product.id, event.target.value)} /></label>
                  <label className="check-row compact"><input type="checkbox" checked={sampleRequested} onChange={() => toggleSample(product.id)} /><span>{t('product.sampleRequested')}</span></label>
                  <p>{t('product.estimatedTotal')}: {formatPriceRange(product.priceMin * quantity, product.priceMax * quantity)}</p>
                  <button className="button button-text" onClick={() => removeItem(product.id)}>{t('product.remove')}</button>
                </div>
              </article>
            ))}
          </div>
          <aside className="summary-card">
            <p className="small-label">{t('cart.subtotal')}</p>
            <h2>{formatYen(totals.min)}〜{formatYen(totals.max)}</h2>
            <Link className="button button-dark full" to="/contact">{t('cta.requestQuote')}</Link>
            <Link className="button button-ghost full" to="/sample-request">{t('cta.askSample')}</Link>
          </aside>
        </div>
      )}
    </section>
  );
}
