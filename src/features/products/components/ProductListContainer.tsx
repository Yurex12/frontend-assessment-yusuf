import { getProducts } from '../api';
import { ProductList } from './ProductList';

export async function ProductListContainer() {
  const data = await getProducts();

  if (!data.products || data.products.length === 0) {
    return (
      <div className='text-center py-10'>
        <p className='text-muted-foreground'>No products found.</p>
      </div>
    );
  }

  return <ProductList products={data.products} />;
}
