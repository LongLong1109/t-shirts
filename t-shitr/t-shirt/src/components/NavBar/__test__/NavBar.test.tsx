import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

// components
import NavBar from '@/components/NavBar';

// constants
import { PAGE_URL } from '@/constants/pageUrl';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('NavBar Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should matches snapshot', () => {
    (usePathname as jest.Mock).mockReturnValue(PAGE_URL.HOME);
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });

  it('renders NavBar with provided navBarList', () => {
    (usePathname as jest.Mock).mockReturnValue(PAGE_URL.HOME);
    render(<NavBar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('does not apply active class and styles to inactive items', () => {
    (usePathname as jest.Mock).mockReturnValue(PAGE_URL.HOME);
    render(<NavBar />);

    const inactiveItem = screen.getByText('About');
    expect(inactiveItem).not.toHaveClass('active');
  });
});
