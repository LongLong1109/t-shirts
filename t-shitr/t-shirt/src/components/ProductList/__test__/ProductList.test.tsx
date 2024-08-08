import { render, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// components
import ProductList from '@/components/ProductList';

// services
import { getProductList } from '@/services/productApi';

// constants
import { PAGE_URL } from '@/constants/pageUrl';
import { productListMock } from '@/mocks/productList';

jest.mock('@/services/productApi');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('ProductList Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should matches snapshot', async () => {
    (getProductList as jest.Mock).mockResolvedValue(productListMock);
    (useRouter as jest.Mock).mockReturnValue(PAGE_URL.HOME);

    const { container } = render(await ProductList());
    waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
