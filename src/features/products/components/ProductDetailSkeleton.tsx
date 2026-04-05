export function ProductDetailSkeleton() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-16 animate-pulse'>
      <div className='aspect-square w-full bg-muted rounded-sm' />

      <div className='space-y-8 py-4'>
        <div className='space-y-4'>
          <div className='h-4 w-20 bg-muted rounded-sm' />

          <div className='h-10 w-full bg-muted rounded-sm' />
          <div className='h-10 w-72 bg-muted rounded-sm' />
        </div>

        <div className='space-y-4'>
          <div className='h-8 w-32 bg-muted rounded-sm' />

          <div className='h-4 w-48 bg-muted rounded-sm' />
        </div>

        <div className='space-y-3 pt-4'>
          <div className='h-4 w-full bg-muted rounded-sm' />
          <div className='h-4 w-full bg-muted rounded-sm' />
          <div className='h-4 w-60 bg-muted rounded-sm' />
        </div>

        <div className='h-12 w-full bg-muted rounded-sm mt-8' />
      </div>
    </div>
  );
}
