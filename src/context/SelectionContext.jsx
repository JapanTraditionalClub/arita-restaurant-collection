import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { products } from '../data/products.js';

const SelectionContext = createContext(null);
const STORAGE_KEY = 'arita-selection-list';

function readStoredItems() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function SelectionProvider({ children }) {
  const [items, setItems] = useState(readStoredItems);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, { sampleRequested = false } = {}) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id);
      if (existing) {
        return current.map((item) =>
          item.productId === product.id
            ? { ...item, sampleRequested: item.sampleRequested || sampleRequested }
            : item
        );
      }
      return [...current, { productId: product.id, quantity: product.moq || 12, sampleRequested }];
    });
    setNotice(product.name);
    setDrawerOpen(true);
    window.setTimeout(() => setNotice(''), 2600);
  };

  const removeItem = (productId) => setItems((current) => current.filter((item) => item.productId !== productId));

  const updateQuantity = (productId, quantity) => {
    const parsed = Math.max(1, Number(quantity) || 1);
    setItems((current) => current.map((item) => (item.productId === productId ? { ...item, quantity: parsed } : item)));
  };

  const toggleSample = (productId) => {
    setItems((current) => current.map((item) => (item.productId === productId ? { ...item, sampleRequested: !item.sampleRequested } : item)));
  };

  const selectedProducts = items
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) }))
    .filter((item) => item.product);

  const totals = selectedProducts.reduce(
    (acc, item) => {
      acc.min += item.product.priceMin * item.quantity;
      acc.max += item.product.priceMax * item.quantity;
      acc.count += 1;
      acc.quantity += item.quantity;
      return acc;
    },
    { min: 0, max: 0, count: 0, quantity: 0 }
  );

  const value = useMemo(
    () => ({
      items,
      selectedProducts,
      totals,
      isDrawerOpen,
      setDrawerOpen,
      notice,
      addItem,
      removeItem,
      updateQuantity,
      toggleSample
    }),
    [items, selectedProducts, totals, isDrawerOpen, notice]
  );

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (!context) throw new Error('useSelection must be used within SelectionProvider');
  return context;
}
