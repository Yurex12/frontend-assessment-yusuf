import Image from 'next/image';
import { Star, Package, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '@/features/products/types';
import { formatPrice } from '@/lib/helpers';

export default function ProductDetail({ product }: { product: Product }) {
  const {
    title,
    description,
    price,
    images,
    category,
    rating,
    stock,
    brand,
    warrantyInformation,
    shippingInformation,
  } = product;

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
        <div className='relative aspect-square w-full bg-muted overflow-hidden rounded-sm border border-foreground/5'>
          <Image
            src={images[0]}
            alt={title}
            fill
            priority
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-contain p-8 transition-transform duration-500 hover:scale-105'
          />
        </div>

        <div className='flex flex-col space-y-8'>
          {/* Header Section */}
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <span className='text-xs font-bold uppercase tracking-widest text-muted-foreground italic'>
                {brand || category}
              </span>
              <div className='flex items-center gap-1.5 px-2 py-1 bg-muted rounded-sm'>
                <Star className='size-3 fill-yellow-400 text-yellow-400' />
                <span className='text-xs font-bold text-foreground'>
                  {rating}
                </span>
              </div>
            </div>

            <h1 className='text-3xl font-black text-foreground tracking-tight leading-tight uppercase'>
              {title}
            </h1>

            <p className='text-2xl font-bold text-foreground'>
              {formatPrice(price)}
            </p>
          </div>

          {/* Description Section */}
          <div className='space-y-4 border-t border-foreground/10 pt-6'>
            <h2 className='text-xs font-bold uppercase tracking-widest text-foreground'>
              Description
            </h2>
            <p className='text-sm leading-relaxed text-muted-foreground max-w-prose'>
              {description}
            </p>
          </div>

          <div className='grid grid-cols-2 gap-4 pt-4'>
            <div className='flex items-center gap-3 p-3 border border-foreground/5 bg-muted/50'>
              <Package className='size-4 text-muted-foreground' />
              <div className='flex flex-col'>
                <span className='text-[10px] text-muted-foreground uppercase font-bold'>
                  Stock
                </span>
                <span className='text-xs font-medium'>{stock} units left</span>
              </div>
            </div>
            <div className='flex items-center gap-3 p-3 border border-foreground/5 bg-muted/50'>
              <Truck className='size-4 text-muted-foreground' />
              <div className='flex flex-col'>
                <span className='text-[10px] text-muted-foreground uppercase font-bold'>
                  Shipping
                </span>
                <span className='text-xs font-medium'>
                  {shippingInformation}
                </span>
              </div>
            </div>
          </div>

          <button className='w-full bg-foreground text-background py-4 font-bold uppercase text-xs tracking-widest transition-all hover:bg-foreground/90 active:scale-[0.98] cursor-pointer'>
            Contact for Inquiry
          </button>

          <div className='flex items-center gap-2 text-[10px] text-muted-foreground italic'>
            <ShieldCheck className='size-3' />
            <span>{warrantyInformation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
