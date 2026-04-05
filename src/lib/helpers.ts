export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const calculateOriginalPrice = (
  price: number,
  discountPercentage: number,
) => {
  if (!discountPercentage) return null;
  const original = price / (1 - discountPercentage / 100);
  return formatPrice(original);
};
