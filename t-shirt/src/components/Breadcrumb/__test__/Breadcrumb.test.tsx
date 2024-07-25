import { render, screen } from '@testing-library/react';

// components
import Breadcrumb from '..';

describe('Breadcrumb Component', () => {
  it('should render the breadcrumb correctly with links', () => {
    const paths = [{ name: 'Home', link: '' }, { name: 'Shop', link: 'shop' }, { name: 'Product' }];

    render(<Breadcrumb paths={paths} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toHaveAttribute('href', 'shop');
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getAllByText('/')).toHaveLength(2);
  });

  it('should render the breadcrumb correctly without links', () => {
    const paths = [{ name: 'Home' }, { name: 'Shop' }, { name: 'Product' }];

    render(<Breadcrumb paths={paths} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getAllByText('/')).toHaveLength(2);
  });
});
