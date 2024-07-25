import { render } from '@testing-library/react';

// components
import Product from '@/components/Product';

describe('Product Component', () => {
  it('should matches snapshot', () => {
    const { container } = render(<Product name='Smart T-shirt' image='' price='40$' />);
    expect(container).toMatchSnapshot();
  });
});
