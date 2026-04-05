import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full bg-background border-b z-50'>
      <div className='max-w-7xl mx-auto px-4 h-16 flex items-center'>
        <Link
          href='/'
          className='text-xl font-semibold tracking-wide uppercase'
        >
          Yusufstore
        </Link>
      </div>
    </header>
  );
}
