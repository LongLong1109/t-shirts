import { render } from '@testing-library/react';

import Category from '..';

describe('Category Component', () => {
  it('should matches snapshot', () => {
    const { asFragment } = render(<Category />);
    expect(asFragment()).toMatchSnapshot();
  });
});
