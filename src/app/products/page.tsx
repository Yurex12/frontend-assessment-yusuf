import { Suspense } from 'react';

import { ProductListContainer } from '@/features/products/components/ProductListContainer';
import { ProductsSkeleton } from '@/features/products/components/ProductsSkeleton';
import { CategoryContainer } from '@/features/products/components/CategoryContainer';
import { CategorySkeleton } from '@/features/products/components/CategorySkeleton';
import { ProductSearchBar } from '@/features/products/components/ProductSearchBar';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const filters = await searchParams;
  return (
    <div className='py-4 space-y-6'>
      <h1 className='text-4xl font-black uppercase tracking-tighter'>
        Products
      </h1>

      <ProductSearchBar />

      <Suspense fallback={<CategorySkeleton />}>
        <CategoryContainer />
      </Suspense>

      <Suspense key={filters.category || 'all'} fallback={<ProductsSkeleton />}>
        <ProductListContainer category={filters.category} query={filters.q} />
      </Suspense>
    </div>
  );
}
