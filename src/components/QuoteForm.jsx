import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { formatPriceRange } from '../utils/format.js';

export default function QuoteForm({ mode = 'quote' }) {
  const { t } = useLanguage();
  const { selectedProducts } = useSelection();
  const [submitted, setSubmitted] = useState(false);

  const selectedSummary = useMemo(() => {
    if (!selectedProducts.length) return '';
    return selectedProducts
      .map(({ product, quantity, sampleRequested }) => `${product.name} × ${quantity}${sampleRequested ? ' / sample' : ''}`)
      .join('\n');
  }, [selectedProducts]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      {submitted && <div className="success-message">{t('form.submitSuccess')}</div>}
      <div className="form-grid">
        <label>{t('form.name')}<input required type="text" placeholder="Jane Smith" /></label>
        <label>{t('form.company')}<input required type="text" placeholder="Restaurant Arita" /></label>
        <label>{t('form.country')}<input type="text" placeholder="Singapore" /></label>
        <label>{t('form.restaurantType')}<input type="text" placeholder="Sushi / Fine Dining / Hotel" /></label>
        <label>{t('form.cuisine')}<input type="text" placeholder="Sushi, Kaiseki, Seafood" /></label>
        <label>{t('form.budget')}<input type="text" placeholder="¥7,000〜¥15,000" /></label>
        {mode === 'consultation' && <label>{t('form.spend')}<input type="text" placeholder="¥20,000+" /></label>}
        {mode === 'consultation' && <label>{t('form.opening')}<input type="text" placeholder="Q3 2026" /></label>}
      </div>
      {mode === 'consultation' && <label>{t('form.concept')}<textarea rows="4" placeholder="Tell us about your restaurant concept." /></label>}
      <label>{t('form.selectedItems')}<textarea rows="6" value={selectedSummary} readOnly placeholder="Selected items will appear here." /></label>
      <label>{t('form.message')}<textarea rows="5" placeholder="Tell us about your quantity, sample needs, timeline, or concept." /></label>
      {selectedProducts.length > 0 && (
        <div className="selected-preview">
          {selectedProducts.map(({ product, quantity }) => (
            <p key={product.id}><strong>{product.name}</strong> × {quantity} — {formatPriceRange(product.priceMin * quantity, product.priceMax * quantity)}</p>
          ))}
        </div>
      )}
      <button className="button button-dark" type="submit">{t('cta.submit')}</button>
    </form>
  );
}
