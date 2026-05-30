import { useLanguage } from '../context/LanguageContext.jsx';
import { useFilters } from '../context/FilterContext.jsx';

const groups = [
  { key: 'budget', values: ['entry', 'standard', 'premium', 'signature', 'bespoke'] },
  { key: 'useCase', values: ['mainPlate', 'sushiPlate', 'appetizer', 'sakeWare', 'hotelDining', 'courseMenu'] },
  { key: 'cuisine', values: ['sushi', 'kaiseki', 'wagyu', 'seafood', 'dessert'] },
  { key: 'size', values: ['small', 'medium', 'large', 'extraLarge'] },
  { key: 'tone', values: ['white', 'blue', 'black', 'earth', 'gold'] },
  { key: 'buyerType', values: ['restaurantOwner', 'hotel', 'distributor', 'procurement'] }
];

function labelGroupKey(group) {
  if (group === 'tone') return 'filter.tone';
  if (group === 'buyerType') return 'filter.buyerType';
  return `filter.${group}`;
}

export default function FilterSidebar() {
  const { t } = useLanguage();
  const { filters, sort, setSort, toggleFilter, setBooleanFilter, setMoqRange, clearFilters, activeCount } = useFilters();

  return (
    <aside className="filter-panel">
      <div className="filter-header">
        <h2>{t('filter.title')}</h2>
        <button className="button button-text" onClick={clearFilters}>{t('cta.clearAll')}</button>
      </div>

      {activeCount > 0 && (
        <div className="active-tags">
          <p className="small-label">{t('filter.active')}</p>
          {groups.flatMap((group) => filters[group.key].map((value) => (
            <button key={`${group.key}-${value}`} className="tag" onClick={() => toggleFilter(group.key, value)}>
              {t(`valueLabels.${group.key}.${value}`)} ×
            </button>
          )))}
          {filters.sampleAvailable && <button className="tag" onClick={() => setBooleanFilter('sampleAvailable', false)}>{t('filter.sampleAvailable')} ×</button>}
          {filters.moqRange && <button className="tag" onClick={() => setMoqRange('')}>{t('filter.moqRange')} ≤ {filters.moqRange} ×</button>}
        </div>
      )}

      {groups.map((group) => (
        <fieldset key={group.key} className="filter-group">
          <legend>{t(labelGroupKey(group.key))}</legend>
          {group.values.map((value) => (
            <label key={value} className="check-row">
              <input
                type="checkbox"
                checked={filters[group.key].includes(value)}
                onChange={() => toggleFilter(group.key, value)}
              />
              <span>{t(`valueLabels.${group.key}.${value}`)}</span>
            </label>
          ))}
        </fieldset>
      ))}

      <fieldset className="filter-group">
        <legend>{t('filter.sampleAvailable')}</legend>
        <label className="check-row">
          <input type="checkbox" checked={filters.sampleAvailable} onChange={(event) => setBooleanFilter('sampleAvailable', event.target.checked)} />
          <span>{t('filter.sampleAvailable')}</span>
        </label>
      </fieldset>

      <fieldset className="filter-group">
        <legend>{t('filter.moqRange')}</legend>
        <select value={filters.moqRange} onChange={(event) => setMoqRange(event.target.value)}>
          <option value="">Any</option>
          <option value="12">{t('filter.upTo12')}</option>
          <option value="24">{t('filter.upTo24')}</option>
          <option value="48">{t('filter.upTo48')}</option>
        </select>
      </fieldset>

      <fieldset className="filter-group">
        <legend>{t('filter.sort')}</legend>
        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="recommended">{t('filter.recommended')}</option>
          <option value="priceLow">{t('filter.priceLow')}</option>
          <option value="priceHigh">{t('filter.priceHigh')}</option>
          <option value="bestSushi">{t('filter.bestSushi')}</option>
          <option value="bestKaiseki">{t('filter.bestKaiseki')}</option>
          <option value="sampleSort">{t('filter.sampleSort')}</option>
          <option value="premiumSort">{t('filter.premiumSort')}</option>
        </select>
      </fieldset>
    </aside>
  );
}
