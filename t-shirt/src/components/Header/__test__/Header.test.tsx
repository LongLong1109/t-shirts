import { render, screen } from '@testing-library/react';

// components
import Header from '..';

describe('Header', () => {
  const onSearchValue = jest.fn();
  it('should renders correctly', () => {
    const { container } = render(<Header searchValue='' onSearchValue={onSearchValue} />);
    expect(container).toMatchSnapshot();
  });

  it('should displays the logo and store name', () => {
    render(<Header searchValue='' onSearchValue={onSearchValue} />);
    expect(screen.getByText('mangcoding Store')).toBeInTheDocument();
  });

  it('should displays the navigation bar with correct items', () => {
    render(<Header searchValue='' onSearchValue={onSearchValue} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should displays the search input', () => {
    render(<Header searchValue='' onSearchValue={onSearchValue} />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
