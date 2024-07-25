import { render, screen, fireEvent } from '@testing-library/react';

import SizeChart from '..';

describe('SizeChart Component', () => {
  const mockOnChange = jest.fn();

  const props = {
    sizeValue: [
      { id: 'size-s', value: 'S', label: 'Small' },
      { id: 'size-m', value: 'M', label: 'Medium' },
      { id: 'size-l', value: 'L', label: 'Large' },
    ],
    name: 'sizeGroup',
    selectedValue: 'M',
    onChange: mockOnChange,
  };

  it('should render the SizeChart correctly with all sizes', () => {
    render(<SizeChart {...props} />);

    expect(screen.getByText('Size')).toBeInTheDocument();
    expect(screen.getByText('Small')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('should render the correct size as checked', () => {
    render(<SizeChart {...props} />);

    const mediumRadioButton = screen.getByLabelText('Medium');
    expect(mediumRadioButton).toBeChecked();
  });

  it('should call onChange when a size is clicked', () => {
    render(<SizeChart {...props} />);

    const smallRadioButton = screen.getByLabelText('Small');
    fireEvent.click(smallRadioButton);
    expect(mockOnChange).toHaveBeenCalledWith('S');
  });

  it('should render the correct number of Size components', () => {
    render(<SizeChart {...props} />);

    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(3);
  });
});
