import { render } from '@testing-library/react';

import ModelList from '..';

describe('ModelList', () => {
  it('should matches snapshot', () => {
    const { asFragment } = render(<ModelList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
