import { render } from '@testing-library/react';

import Quantity from '..';

describe('Quantity', () => {
  const mockOnIncrease = jest.fn();
  const mockOnDecrease = jest.fn();

  const defaultProps = {
    value: 2,
    onInCrease: mockOnIncrease,
    onDeCrease: mockOnDecrease,
  };

  it('renders with initial value and buttons', () => {
    const { asFragment } = render(<Quantity {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
