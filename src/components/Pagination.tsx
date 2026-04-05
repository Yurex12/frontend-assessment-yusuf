'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  totalItems: number;
  itemsPerPage?: number;
  className?: string;
};

export function Pagination({
  totalItems,
  itemsPerPage = 20,
  className,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
      <button
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className='p-2 border rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted cursor-pointer'
      >
        <ChevronLeft size={20} />
      </button>

      <span className='text-[10px] font-black tracking-widest uppercase'>
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className='p-2 border rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted cursor-pointer'
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
