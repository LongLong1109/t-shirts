import { render, screen } from '@testing-library/react';

// components
import NavBar from '@/components/NavBar';

// mocks
import { navBarListMock } from '@/mocks/navBarList';

describe('NavBar Component', () => {
  it('should matches snapshot', () => {
    const { container } = render(<NavBar navBarList={navBarListMock} />);
    expect(container).toMatchSnapshot();
  });

  it('renders NavBar with provided navBarList', () => {
    render(<NavBar navBarList={navBarListMock} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('does not apply active class and styles to inactive items', () => {
    render(<NavBar navBarList={navBarListMock} />);

    const inactiveItem = screen.getByText('About');
    expect(inactiveItem).not.toHaveClass('active font-bold flex flex-col items-center');
  });
});
