import { render } from '@testing-library/react';

// components
import Text from '@/components/common/Text';

// types
import { FONT_SIZE, FONT_WEIGHT } from '@/constants/fontStyle';

describe('Paragraph Component', () => {
  it('renders the text correctly', () => {
    const { getByText } = render(<Text text='Hello World' />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('applies the correct size and weight classes', () => {
    const { container } = render(
      <Text text='Hello World' size={FONT_SIZE.MD} weight={FONT_WEIGHT.BOLD} />,
    );
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveClass(`text-${FONT_SIZE.MD}`);
    expect(paragraph).toHaveClass(`font-${FONT_WEIGHT.BOLD}`);
  });
});
