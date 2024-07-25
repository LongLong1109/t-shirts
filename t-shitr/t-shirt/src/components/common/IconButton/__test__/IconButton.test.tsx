import { render, fireEvent } from '@testing-library/react';

// components
import IconButton from '..';
import PlusIcon from '@/icons/plusIcon';

describe('IconButton Component', () => {
  const onClickMock = jest.fn();

  it('renders icon correctly', () => {
    const { getByTestId } = render(<IconButton icon={<PlusIcon />} onClick={onClickMock} />);
    const iconElement = getByTestId('icon-btn');
    expect(iconElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const { getByTestId } = render(<IconButton icon={<PlusIcon />} onClick={onClickMock} />);
    const iconElement = getByTestId('icon-btn');
    fireEvent.click(iconElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    const { container } = render(
      <IconButton icon={<PlusIcon />} onClick={onClickMock} className='custom-class' />,
    );
    const buttonElement = container.firstChild;
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('disables button when disabled prop is true', () => {
    const { getByTestId } = render(
      <IconButton icon={<PlusIcon />} onClick={onClickMock} disabled />,
    );
    const iconElement = getByTestId('icon-btn');
    expect(iconElement).toBeDisabled();
  });

  it('sets custom color style', () => {
    const { getByTestId } = render(
      <IconButton icon={<PlusIcon />} onClick={onClickMock} color='red' />,
    );
    const iconElement = getByTestId('icon-btn');
    expect(iconElement).toHaveStyle('color: red');
  });
});
