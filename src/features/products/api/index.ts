import { API_URL } from '@/lib/api';
import { ProductResponse } from '../types';

export async function getProducts(): Promise<ProductResponse> {
  const res = await fetch(`${API_URL}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}
