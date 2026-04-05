import { Suspense } from 'react';

import { ProductDetailContainer } from '@/features/products/components/ProductDetailContainer';
import { ProductDetailSkeleton } from '@/features/products/components/ProductDetailSkeleton';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetailContainer id={id} />
      </Suspense>
    </div>
  );
}
