import { render } from '@testing-library/react';

// component
import BrandShirt from '..';

describe('BrandShirt Component', () => {
  it('should matches snapshot', () => {
    const { asFragment } = render(<BrandShirt />);
    expect(asFragment()).toMatchSnapshot();
  });
});
