'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-[50vh]'>
      <h2 className='text-xl font-bold'>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className='mt-4 px-4 py-2 bg-foreground text-background rounded-lg cursor-pointer'
      >
        Try again
      </button>
    </div>
  );
}
