import { render } from '@testing-library/react';

import Oblongers from '..';

describe('Oblongers Component', () => {
  it('should matches snapshot', () => {
    const { asFragment } = render(<Oblongers />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correct value', () => {
    const { getByText } = render(<Oblongers />);

    expect(getByText('The Oblongers T-Shirt')).toBeInTheDocument();
  });

  it('renders the Order Now button', () => {
    const { getByText } = render(<Oblongers />);
    expect(getByText('Order Now')).toBeInTheDocument();
  });
});
