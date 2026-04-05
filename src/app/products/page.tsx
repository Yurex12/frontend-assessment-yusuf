import { Suspense } from 'react';

import { ProductListContainer } from '@/features/products/components/ProductListContainer';
import { ProductsSkeleton } from '@/features/products/components/ProductsSkeleton';
import { CategoryContainer } from '@/features/products/components/CategoryContainer';
import { CategorySkeleton } from '@/features/products/components/CategorySkeleton';

export default async function Page() {
  return (
    <div className='py-4 space-y-6'>
      <h1 className='text-4xl font-black uppercase tracking-tighter'>
        Products
      </h1>
      <Suspense fallback={<CategorySkeleton />}>
        <CategoryContainer />
      </Suspense>

      <Suspense fallback={<ProductsSkeleton />}>
        <ProductListContainer />
      </Suspense>
    </div>
  );
}
