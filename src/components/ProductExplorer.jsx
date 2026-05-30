import { useState } from 'react';
import { products } from '../data/products.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useFilters } from '../context/FilterContext.jsx';
import { filterProducts, sortProducts } from '../utils/filterProducts.js';
import FilterSidebar from './FilterSidebar.jsx';
import ProductCard from './ProductCard.jsx';
import QuickViewModal from './QuickViewModal.jsx';

export default function ProductExplorer({ productSource = products, showFilters = true }) {
  const { t } = useLanguage();
  const { filters, sort } = useFilters();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const filtered = sortProducts(showFilters ? filterProducts(productSource, filters) : productSource, sort);

  return (
    <section className="catalog-layout">
      {showFilters && <FilterSidebar />}
      <div className="catalog-results">
        <div className="result-count">{filtered.length} {t('filter.results')}</div>
        <div className="product-grid">
          {filtered.map((product) => <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />)}
        </div>
      </div>
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </section>
  );
}
