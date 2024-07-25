import Button from '@/components/common/Button';

import { render, fireEvent } from '@testing-library/react';

describe('Button Component', () => {
  const onClick = jest.fn();
  it('should matches snapshot', () => {
    const { container } = render(<Button text='Shop' onClick={onClick} />);
    expect(container).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const { getByText } = render(<Button text='Shop' onClick={onClick} />);
    const button = getByText('Shop');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
