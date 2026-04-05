import { Metadata } from 'next';
import { Suspense } from 'react';

import { ProductDetailContainer } from '@/features/products/components/ProductDetailContainer';
import { ProductDetailSkeleton } from '@/features/products/components/ProductDetailSkeleton';

import { API_URL } from '@/lib/api';

import { Product } from '@/features/products/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) return { title: 'Product Not Found' };

  const product: Product = await res.json();

  return {
    title: `${product.title} | Store`,
    description: product.description,
    openGraph: {
      images: [product.thumbnail],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className='mt-24 pb-4'>
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetailContainer id={id} />
      </Suspense>
    </div>
  );
}
