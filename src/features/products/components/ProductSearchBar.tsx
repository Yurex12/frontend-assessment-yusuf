'use client';

import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useDebounce } from '@/hooks/useDebounce';

export function ProductSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (debouncedQuery) {
      params.set('q', debouncedQuery);
      params.delete('category');
      params.set('page', '1');
    } else {
      params.delete('q');
    }

    router.push(`/products?${params.toString()}`);
  }, [debouncedQuery, router]);

  return (
    <div className='relative w-full max-w-sm mb-8'>
      <Search className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground' />

      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search products...'
        className='w-full bg-transparent border-b border-foreground/10 py-2 pl-10 pr-10 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 font-bold tracking-widest'
      />

      {query && (
        <button
          onClick={() => setQuery('')}
          className='absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:text-foreground text-muted-foreground transition-colors cursor-pointer'
        >
          <X className='size-4' />
        </button>
      )}
    </div>
  );
}
