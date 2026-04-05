import { getProducts } from '../api';

import { ProductList } from './ProductList';

import { Pagination } from '@/components/Pagination';
import { ProductListContainerProps } from '../types';

export async function ProductListContainer({
  category,
  query,
}: ProductListContainerProps) {
  const data = await getProducts({ category, query });

  if (!data.products || data.products.length === 0) {
    return (
      <div className='text-center py-10'>
        <p className='text-muted-foreground'>No products found.</p>
      </div>
    );
  }

  return (
    <div>
      <ProductList products={data.products} />;
      <Pagination totalItems={data.total} />
    </div>
  );
}
