export function formatYen(value) {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 }).format(value);
}

export function formatPriceRange(min, max) {
  return `${formatYen(min)}〜${formatYen(max)}`;
}

export function getLocalized(product, field, language) {
  return product?.[field]?.[language] || product?.[field]?.en || '';
}
