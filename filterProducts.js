function intersects(productValues, selectedValues) {
  if (!selectedValues || selectedValues.length === 0) return true;
  return selectedValues.some((value) => productValues.includes(value));
}

export function filterProducts(products, filters) {
  return products.filter((product) => {
    const matchBudget = !filters.budget.length || filters.budget.includes(product.budget);
    const matchUseCase = intersects(product.useCases, filters.useCase);
    const matchCuisine = intersects(product.cuisines, filters.cuisine);
    const matchSize = !filters.size.length || filters.size.includes(product.sizeCategory);
    const matchTone = !filters.tone.length || filters.tone.includes(product.tone);
    const matchBuyer = intersects(product.buyerTypes, filters.buyerType);
    const matchSample = !filters.sampleAvailable || product.sampleAvailable;
    const matchMoq = !filters.moqRange || product.moq <= Number(filters.moqRange);
    return matchBudget && matchUseCase && matchCuisine && matchSize && matchTone && matchBuyer && matchSample && matchMoq;
  });
}

export function sortProducts(products, sort) {
  const copy = [...products];
  switch (sort) {
    case 'priceLow':
      return copy.sort((a, b) => a.priceMin - b.priceMin);
    case 'priceHigh':
      return copy.sort((a, b) => b.priceMax - a.priceMax);
    case 'bestSushi':
      return copy.sort((a, b) => Number(b.cuisines.includes('sushi')) - Number(a.cuisines.includes('sushi')));
    case 'bestKaiseki':
      return copy.sort((a, b) => Number(b.cuisines.includes('kaiseki')) - Number(a.cuisines.includes('kaiseki')));
    case 'sampleSort':
      return copy.sort((a, b) => Number(b.sampleAvailable) - Number(a.sampleAvailable));
    case 'premiumSort':
      return copy.sort((a, b) => b.priceMax - a.priceMax);
    default:
      return copy;
  }
}
