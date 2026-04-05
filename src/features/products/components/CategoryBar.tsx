'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';

export function CategoryBar({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className='flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide border-b border-foreground/10'>
      <button
        onClick={() => handleCategoryClick('all')}
        className={cn(
          'text-[0.625rem] font-bold uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer',
          activeCategory === 'all'
            ? 'text-foreground underline underline-offset-6'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        All Products
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={cn(
            'text-[0.625rem] font-bold uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer',
            activeCategory === category
              ? 'text-foreground underline underline-offset-6'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {category.replace('-', ' ')}
        </button>
      ))}
    </div>
  );
}
