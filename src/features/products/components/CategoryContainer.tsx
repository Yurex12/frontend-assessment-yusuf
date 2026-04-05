import { getCategories } from '../api';
import { CategoryBar } from './CategoryBar';

export async function CategoryContainer() {
  const categories = await getCategories();

  return <CategoryBar categories={categories} />;
}
