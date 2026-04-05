import Image from 'next/image';
import Link from 'next/link';

import { Star } from 'lucide-react';

import { Product } from '@/features/products/types';
import { calculateOriginalPrice, formatPrice } from '@/lib/helpers';

export function ProductCard({ product }: { product: Product }) {
  const { id, title, price, thumbnail, category, rating, discountPercentage } =
    product;

  return (
    <div className='group relative bg-background border border-foreground/20 p-4 transition-all duration-300 hover:border-foreground'>
      {discountPercentage > 0 && (
        <div className='absolute top-0 left-0 z-10 bg-foreground text-background text-[0.625rem] px-2 py-1 uppercase font-bold tracking-tighter'>
          -{Math.round(discountPercentage)}%
        </div>
      )}

      <div className='relative aspect-square w-full overflow-hidden bg-muted mb-4'>
        <Image
          src={thumbnail}
          alt={title}
          loading='eager'
          fill
          sizes='(max-width: 48rem) 100vw, (max-width: 75rem) 50vw, 25vw'
          className='object-contain p-4 transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex justify-between items-center'>
          <span className='text-[0.625rem] text-muted-foreground uppercase tracking-widest font-semibold italic'>
            {category}
          </span>
          <div className='flex items-center gap-1 text-muted-foreground'>
            <Star className='size-3 fill-yellow-400 text-yellow-400' />
            <span className='text-[0.625rem] font-bold'>{rating}</span>
          </div>
        </div>

        <h3 className='text-sm font-medium text-foreground truncate tracking-tight'>
          <Link href={`/products/${id}`}>
            <span className='absolute inset-0 z-20' aria-hidden='true' />
            {title}
          </Link>
        </h3>

        <div className='flex items-baseline gap-2'>
          <span className='text-base font-bold text-foreground'>
            {formatPrice(price)}
          </span>
          {discountPercentage > 0 && (
            <span className='text-[0.625rem] text-muted-foreground line-through'>
              {calculateOriginalPrice(price, discountPercentage)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
