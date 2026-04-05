import { notFound } from 'next/navigation';
import { getProductById } from '../api';
import ProductDetail from './ProductDetail';

export async function ProductDetailContainer({ id }: { id: string }) {
  const product = await getProductById(id);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
