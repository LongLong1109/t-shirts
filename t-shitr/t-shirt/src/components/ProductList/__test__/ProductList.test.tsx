import { render } from '@testing-library/react';

// components
import ProductList from '@/components/ProductList';

// mocks
import { productListMock } from '@/mocks/productList';

describe('ProductList Component', () => {
  it('should matches snapshot', () => {
    const { container } = render(<ProductList productList={productListMock} />);
    expect(container).toMatchSnapshot();
  });
});
