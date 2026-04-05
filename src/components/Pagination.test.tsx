import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from './Pagination';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/products',
  useSearchParams: () => new URLSearchParams(),
}));

describe('Pagination Component', () => {
  it('renders exactly two navigation buttons (Prev and Next)', () => {
    render(<Pagination totalItems={100} itemsPerPage={20} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);
  });

  it('disables the "Previous" (first) button on the first page', () => {
    render(<Pagination totalItems={100} itemsPerPage={20} />);

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0];

    expect(prevButton).toBeDisabled();
  });

  it('shows the correct page indicator text', () => {
    render(<Pagination totalItems={100} itemsPerPage={20} />);

    const indicator = screen.getByText(/1 \/ 5/);
    expect(indicator).toBeInTheDocument();
  });
});
