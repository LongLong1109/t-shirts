import { render, screen, fireEvent } from '@testing-library/react';

// components
import Toast from '..';

// types
import { TOAST } from '@/types/toast';

describe('Toast Component', () => {
  const onClose = jest.fn();
  it('renders the message and close button', () => {
    render(<Toast message='Test message' type={TOAST.SUCCESS} onClose={onClose} />);

    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    const onClose = jest.fn();
    render(<Toast message='Test message' type={TOAST.SUCCESS} onClose={onClose} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('applies the correct class based on the type', () => {
    const { rerender } = render(
      <Toast message='Test message' type={TOAST.SUCCESS} onClose={() => {}} />,
    );
    expect(screen.getByText('Test message').parentElement).toHaveClass('toast success');

    rerender(<Toast message='Test message' type={TOAST.ERROR} onClose={() => {}} />);
    expect(screen.getByText('Test message').parentElement).toHaveClass('toast error');

    rerender(<Toast message='Test message' type={TOAST.INFO} onClose={() => {}} />);
    expect(screen.getByText('Test message').parentElement).toHaveClass('toast info');
  });
});
