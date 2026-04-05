export function ProductsSkeleton() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className='border border-gray-100 rounded-2xl p-5 bg-background space-y-4'
        >
          <div className='aspect-4/3 w-full bg-muted rounded-xl animate-pulse' />

          <div className='space-y-2'>
            <div className='h-3 w-1/4 bg-muted rounded animate-pulse' />

            <div className='h-5 w-full bg-muted rounded animate-pulse' />

            <div className='flex justify-between items-center pt-2'>
              <div className='h-6 w-1/4 bg-muted rounded animate-pulse' />

              <div className='h-6 w-12 bg-muted rounded animate-pulse' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
