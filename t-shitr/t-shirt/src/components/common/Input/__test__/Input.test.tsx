import { render, fireEvent } from '@testing-library/react';

// components
import Input from '@/components/common/Input';
import HiddenIcon from '@/icons/hiddenIcon';

describe('Input Component', () => {
  const onChange = jest.fn();
  it('renders the input with the provided value', () => {
    const { getByDisplayValue } = render(
      <Input value='test value' type='text' placeholder='Search...' onChange={onChange} />,
    );
    expect(getByDisplayValue('test value')).toBeInTheDocument();
  });

  it('renders the input with the icon when provided', () => {
    const { container } = render(
      <Input
        value=''
        type='text'
        placeholder='Search...'
        onChange={onChange}
        icon={<HiddenIcon />}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('calls the onChange handler when the input value changes', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input value='' type='text' placeholder='Search...' onChange={handleChange} />,
    );
    const input = getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
