import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// components
import Carousel from '..';

// mocks
import { modelList } from '@/mocks/imageList';

describe('Carousel Component', () => {
  const CarouselComponent = () => {
    const setCurrentIndex = () => {};
    const utils = render(
      <Carousel images={modelList} size={400} currentIndex={0} setCurrentIndex={setCurrentIndex} />,
    );
    return { ...utils, setCurrentIndex };
  };
  it('renders images correctly', () => {
    CarouselComponent();

    const carouselImages = screen.getAllByRole('img');
    expect(carouselImages).toHaveLength(modelList.length);
  });

  it('handles next and previous slides correctly', async () => {
    CarouselComponent();

    let carouselImages = screen.getAllByRole('img');
    expect(carouselImages[0]).toBeInTheDocument();

    const nextButton = screen.getByTestId('right-btn');
    fireEvent.click(nextButton);

    await waitFor(() => {
      carouselImages = screen.getAllByRole('img');
      expect(carouselImages[1]).toBeInTheDocument();
    });

    const prevButton = screen.getByTestId('left-btn');
    fireEvent.click(prevButton);

    await waitFor(() => {
      carouselImages = screen.getAllByRole('img');
      expect(carouselImages[0]).toBeInTheDocument();
    });
  });
});
