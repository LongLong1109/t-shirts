import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

// components
import Header from '..';

// constants
import { PAGE_URL } from '@/constants/pageUrl';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Header', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should renders correctly', () => {
    (usePathname as jest.Mock).mockReturnValue(PAGE_URL.HOME);
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it('should displays the logo and store name', () => {
    (usePathname as jest.Mock).mockReturnValue(PAGE_URL.HOME);
    render(<Header />);
    expect(screen.getByText('mangcoding Store')).toBeInTheDocument();
  });

  it('should displays the navigation bar with correct items', () => {
    (usePathname as jest.Mock).mockReturnValue(PAGE_URL.HOME);
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should displays the search input', () => {
    (usePathname as jest.Mock).mockReturnValue(PAGE_URL.HOME);
    render(<Header />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
