import { render, screen, fireEvent } from '@testing-library/react';

// components
import Size from '..';

describe('Size Component', () => {
  const mockOnChange = jest.fn();

  const props = {
    id: 'size-m',
    name: 'size',
    value: 'M',
    isChecked: false,
    onChange: mockOnChange,
    label: 'Medium',
  };

  it('should render the size radio button correctly', () => {
    render(<Size {...props} />);

    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toHaveAttribute('id', 'size-m');
    expect(radioButton).toHaveAttribute('name', 'size');
    expect(radioButton).toHaveAttribute('value', 'M');
    expect(radioButton).not.toBeChecked();
  });

  it('should render the label correctly', () => {
    render(<Size {...props} />);

    const labelElement = screen.getByText('Medium');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).not.toHaveClass('text-white-100 font-bold');
  });

  it('should call onChange when the radio button is clicked', () => {
    render(<Size {...props} />);

    const radioButton = screen.getByRole('radio');
    fireEvent.click(radioButton);
    expect(mockOnChange).toHaveBeenCalledWith('M');
  });

  it('should apply checked styles when isChecked is true', () => {
    render(<Size {...props} isChecked={true} />);

    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeChecked();
    expect(radioButton).toHaveClass('bg-dark-50');
    const labelElement = screen.getByText('Medium');
    expect(labelElement).toHaveClass('text-white-100 font-bold');
  });
});
