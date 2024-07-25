import { render, fireEvent, screen } from '@testing-library/react';

import RadioButtonGroup from '..';

import { radioButtonOptionsMock } from '@/mocks/radioButtonOptions';

describe('RadioButtonGroup component', () => {
  const mockOnChange = jest.fn();

  const defaultProps = {
    options: radioButtonOptionsMock,
    name: 'white',
    selectedValue: 'white',
    onChange: mockOnChange,
  };

  it('should renders with correct props', () => {
    render(<RadioButtonGroup {...defaultProps} />);

    const paragraphElement = screen.getByText('Color');
    expect(paragraphElement).toBeInTheDocument();

    defaultProps.options.forEach(({ id, value }) => {
      const radioButton = screen.getByDisplayValue(value);
      expect(radioButton).toBeInTheDocument();
      expect(radioButton).toHaveAttribute('id', id);
      expect(radioButton).toHaveAttribute('name', 'white');
      expect(radioButton).toHaveAttribute('value', value);
    });
  });

  it('should calls onChange when a radio button is clicked', () => {
    render(<RadioButtonGroup {...defaultProps} />);

    const radioButtonGreen = screen.getByDisplayValue('green');
    fireEvent.click(radioButtonGreen);

    expect(mockOnChange).toHaveBeenCalledWith('green');
  });

  it('should applies checked style to the selected radio button', () => {
    render(<RadioButtonGroup {...defaultProps} />);

    const radioButtonWhite = screen.getByDisplayValue('white');
    expect(radioButtonWhite).toBeChecked();

    const radioButtonGreen = screen.getByDisplayValue('green');
    expect(radioButtonGreen).not.toBeChecked();

    const radioButtonBlack = screen.getByDisplayValue('black');
    expect(radioButtonBlack).not.toBeChecked();
  });
});
