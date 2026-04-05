import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProductSearchBar } from './ProductSearchBar';

const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => '/products',
  useSearchParams: () => new URLSearchParams(),
}));

describe('ProductSearch Component', () => {
  it('updates input value when user types', () => {
    render(<ProductSearchBar />);
    const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'iphone' } });
    expect(input.value).toBe('iphone');
  });

  it('calls router.push when Enter is pressed', () => {
    render(<ProductSearchBar />);
    const input = screen.getByPlaceholderText(/search/i);

    fireEvent.change(input, { target: { value: 'laptop' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockPush).toHaveBeenCalled();
  });
});
