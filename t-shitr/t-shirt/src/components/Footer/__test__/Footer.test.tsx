import { render, screen } from '@testing-library/react';

import Footer from '..';

describe('Footer Component', () => {
  it('should renders correctly and matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders the mangcoding Store logo and text', () => {
    render(<Footer />);
    expect(screen.getByText('mangcoding Store')).toBeInTheDocument();
  });

  it('should renders the footer links correctly', () => {
    render(<Footer />);

    const categories = screen.getAllByText('Categories')[0];
    const shop = screen.getAllByText('Shop')[0];

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(categories).toBeInTheDocument();
    expect(shop).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();

    expect(screen.getByText('T-shirt')).toBeInTheDocument();
    expect(screen.getByText('Jacket')).toBeInTheDocument();
    expect(screen.getByText('Shirt')).toBeInTheDocument();
    expect(screen.getByText('Jeans')).toBeInTheDocument();

    expect(screen.getByText('Men')).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
    expect(screen.getByText('Women')).toBeInTheDocument();

    expect(screen.getByText('mangcoding@gmail.com')).toBeInTheDocument();
  });
});
