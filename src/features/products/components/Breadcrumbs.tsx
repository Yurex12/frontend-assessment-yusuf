import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  return (
    <nav className='flex items-center gap-2 mb-8 text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground'>
      <Link
        href='/products'
        className='flex items-center gap-1 hover:text-foreground transition-colors'
      >
        <Home className='size-3' />
        Home
      </Link>

      <ChevronRight className='size-3 opacity-50' />

      <Link
        href={`/products?category=${category}`}
        className='hover:text-foreground transition-colors'
      >
        {category}
      </Link>

      <ChevronRight className='size-3 opacity-50' />

      <span className='text-foreground truncate max-40'>{title}</span>
    </nav>
  );
}
