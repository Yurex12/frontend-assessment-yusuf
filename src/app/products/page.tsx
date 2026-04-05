import { Suspense } from 'react';

import { ProductListContainer } from '@/features/products/components/ProductListContainer';
import { ProductsSkeleton } from '@/features/products/components/ProductsSkeleton';

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductListContainer />
      </Suspense>
    </div>
  );
}
