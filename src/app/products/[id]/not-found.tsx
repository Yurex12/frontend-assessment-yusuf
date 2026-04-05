import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[50vh] space-y-4'>
      <h2 className='text-2xl font-black uppercase tracking-tighter'>
        Product Not Found
      </h2>
      <p className='text-muted-foreground'>
        We couldn&apos;t find the item you&apos;re looking for.
      </p>
      <Link
        href='/products'
        className='mt-4 px-6 py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest'
      >
        Back to Shop
      </Link>
    </div>
  );
}
