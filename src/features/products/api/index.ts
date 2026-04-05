import { API_URL } from '@/lib/api';
import { Product, ProductResponse } from '../types';

export async function getProducts(params?: {
  category?: string;
  query?: string;
  page?: number;
}): Promise<ProductResponse> {
  const limit = 20;
  const skip = ((params?.page || 1) - 1) * limit;

  let baseUrl = API_URL;

  if (params?.query) {
    baseUrl += `/search?q=${params.query}&`;
  } else if (params?.category && params.category !== 'all') {
    baseUrl += `/category/${params.category}?`;
  } else {
    baseUrl += '?';
  }

  const url = `${baseUrl}limit=${limit}&skip=${skip}`;

  const res = await fetch(url, { next: { revalidate: 60 } });
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

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_URL}/category-list`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}
