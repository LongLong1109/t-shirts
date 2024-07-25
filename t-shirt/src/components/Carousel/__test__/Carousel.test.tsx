import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// components
import Carousel from '..';

// mocks
import { imageListMock } from '@/mocks/imageList';

describe('Carousel Component', () => {
  it('renders images correctly', () => {
    render(<Carousel images={imageListMock} size='full' />);

    const carouselImages = screen.getAllByAltText(/image/);
    expect(carouselImages).toHaveLength(imageListMock.length);
  });

  it('handles next and previous slides correctly', async () => {
    render(<Carousel images={imageListMock} size='full' />);

    let carouselImages = screen.getAllByAltText(/image/);
    expect(carouselImages[0]).toBeInTheDocument();

    const nextButton = screen.getByTestId('right-btn');
    fireEvent.click(nextButton);

    await waitFor(() => {
      carouselImages = screen.getAllByAltText(/image/);
      expect(carouselImages[1]).toBeInTheDocument();
    });

    const prevButton = screen.getByTestId('left-btn');
    fireEvent.click(prevButton);

    await waitFor(() => {
      carouselImages = screen.getAllByAltText(/image/);
      expect(carouselImages[0]).toBeInTheDocument();
    });
  });
});
