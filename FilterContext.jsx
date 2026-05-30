import { createContext, useContext, useMemo, useState } from 'react';

const FilterContext = createContext(null);

const defaultFilters = {
  budget: [],
  useCase: [],
  cuisine: [],
  size: [],
  tone: [],
  buyerType: [],
  sampleAvailable: false,
  moqRange: ''
};

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState('recommended');

  const toggleFilter = (group, value) => {
    setFilters((current) => {
      const values = current[group] || [];
      return {
        ...current,
        [group]: values.includes(value) ? values.filter((entry) => entry !== value) : [...values, value]
      };
    });
  };

  const setSingleFilter = (group, value) => setFilters((current) => ({ ...current, [group]: [value] }));
  const setBooleanFilter = (group, value) => setFilters((current) => ({ ...current, [group]: value }));
  const setMoqRange = (value) => setFilters((current) => ({ ...current, moqRange: value }));
  const clearFilters = () => setFilters(defaultFilters);

  const activeCount = Object.values(filters).reduce((count, value) => {
    if (Array.isArray(value)) return count + value.length;
    if (typeof value === 'boolean') return count + (value ? 1 : 0);
    return count + (value ? 1 : 0);
  }, 0);

  const value = useMemo(
    () => ({ filters, sort, setSort, toggleFilter, setSingleFilter, setBooleanFilter, setMoqRange, clearFilters, activeCount }),
    [filters, sort, activeCount]
  );

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilters must be used within FilterProvider');
  return context;
}
