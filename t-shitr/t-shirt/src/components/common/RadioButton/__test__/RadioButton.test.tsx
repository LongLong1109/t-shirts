import { render, fireEvent, screen } from '@testing-library/react';

import RadioButton from '..';

describe('RadioButton Component', () => {
  const mockOnChange = jest.fn();

  const defaultProps = {
    id: 'radio',
    name: 'radioGroup',
    value: 'value',
    isChecked: false,
    onChange: mockOnChange,
    inputStyle: 'custom-style',
  };

  it('should renders with correct props', () => {
    render(<RadioButton {...defaultProps} />);

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute('id', 'radio');
    expect(radioInput).toHaveAttribute('name', 'radioGroup');
    expect(radioInput).toHaveAttribute('value', 'value');
    expect(radioInput).not.toBeChecked();
  });

  it('should calls onChange when clicked', () => {
    render(<RadioButton {...defaultProps} />);

    const radioInput = screen.getByRole('radio');
    fireEvent.click(radioInput);

    expect(mockOnChange).toHaveBeenCalledWith('value');
  });

  it('should applies checked style when checked', () => {
    render(<RadioButton {...defaultProps} isChecked={true} />);

    const radioInput = screen.getByRole('radio');
    const spanElement = screen.getByText('', { selector: 'span' });

    expect(radioInput).toBeChecked();
    expect(spanElement).toHaveClass('w-3 h-3 rounded-full bg-blue-500 ml-[6px]');
  });

  it('should not apply checked style when not checked', () => {
    render(<RadioButton {...defaultProps} isChecked={false} />);

    const radioInput = screen.getByRole('radio');
    const spanElement = screen.getByText('', { selector: 'span' });

    expect(radioInput).not.toBeChecked();
    expect(spanElement).toHaveClass('w-3 h-3 rounded-full bg-transparent ml-[6px]');
  });
});
