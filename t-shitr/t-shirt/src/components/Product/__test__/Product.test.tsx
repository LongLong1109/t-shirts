import { render } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// components
import Product from '@/components/Product';

// mocks
import { productListMock } from '@/mocks';

// constants
import { PAGE_URL } from '@/constants/pageUrl';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Product Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should matches snapshot', () => {
    (useRouter as jest.Mock).mockReturnValue(PAGE_URL.HOME);
    const { container } = render(<Product {...productListMock[0]} />);
    expect(container).toMatchSnapshot();
  });
});
