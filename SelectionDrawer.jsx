import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { formatPriceRange, formatYen } from '../utils/format.js';

export default function SelectionDrawer() {
  const { t } = useLanguage();
  const { selectedProducts, totals, isDrawerOpen, setDrawerOpen, removeItem, updateQuantity, toggleSample } = useSelection();
  const navigate = useNavigate();

  if (!isDrawerOpen) return null;

  const goTo = (path) => {
    setDrawerOpen(false);
    navigate(path);
  };

  return (
    <div className="drawer-overlay" onClick={() => setDrawerOpen(false)}>
      <aside className="selection-drawer" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-header">
          <div>
            <p className="small-label">Quote Cart</p>
            <h2>{t('cart.drawerTitle')}</h2>
          </div>
          <button className="icon-button" onClick={() => setDrawerOpen(false)} aria-label="Close">×</button>
        </div>

        {selectedProducts.length === 0 ? (
          <div className="empty-state">
            <h3>{t('cart.empty')}</h3>
            <p>{t('cart.emptyText')}</p>
            <button className="button button-dark" onClick={() => goTo('/budget')}>{t('cta.startBudget')}</button>
            <button className="button button-ghost" onClick={() => goTo('/use-case')}>{t('cta.startUseCase')}</button>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {selectedProducts.map(({ product, quantity, sampleRequested }) => (
                <div className="drawer-item" key={product.id}>
                  <img src={product.image} alt={product.alt} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{formatPriceRange(product.priceMin, product.priceMax)} / piece</p>
                    <label className="qty-row">
                      {t('product.quantity')}
                      <input type="number" min="1" value={quantity} onChange={(event) => updateQuantity(product.id, event.target.value)} />
                    </label>
                    <label className="check-row compact">
                      <input type="checkbox" checked={sampleRequested} onChange={() => toggleSample(product.id)} />
                      <span>{t('product.sampleRequested')}</span>
                    </label>
                    <p className="meta-line">{t('product.estimatedTotal')}: {formatPriceRange(product.priceMin * quantity, product.priceMax * quantity)}</p>
                    <button className="button button-text" onClick={() => removeItem(product.id)}>{t('product.remove')}</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="drawer-summary">
              <p>{t('cart.subtotal')}</p>
              <strong>{formatYen(totals.min)}〜{formatYen(totals.max)}</strong>
              <button className="button button-dark full" onClick={() => goTo('/contact')}>{t('cta.requestQuote')}</button>
              <button className="button button-ghost full" onClick={() => goTo('/sample-request')}>{t('cta.askSample')}</button>
              <button className="button button-light full" onClick={() => goTo('/selection-list')}>{t('cta.fullSelection')}</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
