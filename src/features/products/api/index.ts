import { API_URL } from '@/lib/api';
import { Product, ProductResponse } from '../types';

export async function getProducts(): Promise<ProductResponse> {
  const res = await fetch(`${API_URL}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}

export async function getProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${API_URL}/${id}`, {
    cache: 'no-store',
  });

  if (res.status === 404) return null;

  if (!res.ok) throw new Error('Failed to fetch product');

  return res.json();
}
