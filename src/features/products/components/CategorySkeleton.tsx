export function CategorySkeleton() {
  return (
    <div className='flex items-center gap-6 pb-4 border-b border-foreground/5 mb-8 overflow-hidden'>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className='h-3 w-16 bg-muted animate-pulse rounded-full shrink-0'
        />
      ))}
    </div>
  );
}
