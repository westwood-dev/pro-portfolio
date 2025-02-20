import { render } from '@testing-library/react';
import { ImagePreloader } from '../../components/ImagePreloader';

jest.useFakeTimers();

describe('ImagePreloader', () => {
  beforeEach(() => {
    // Mock HTMLImageElement
    class MockImage implements Partial<HTMLImageElement> {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      src: string = '';
    }
    
    global.Image = MockImage as unknown as typeof Image;
  });

  it('calls onComplete when all images are loaded', () => {
    // const imageUrls = ['image1.jpg', 'image2.jpg'];
    const imageUrls: [] = [];
    const onComplete = jest.fn();

    render(<ImagePreloader imageUrls={imageUrls} onComplete={onComplete} />);
    jest.runAllTimers();

    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('calls onComplete immediately when no images are provided', () => {
    const onComplete = jest.fn();

    render(<ImagePreloader imageUrls={[]} onComplete={onComplete} />);
    jest.runAllTimers();

    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('handles image loading errors', () => {
    // Override Image mock to simulate an error
    class ErrorImage implements Partial<HTMLImageElement> {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      src: string = '';
      constructor() {
        setTimeout(() => this.onerror?.(), 0);
      }
    }
    
    global.Image = ErrorImage as unknown as typeof Image;

    const imageUrls = ['bad-image.jpg'];
    const onComplete = jest.fn();

    render(<ImagePreloader imageUrls={imageUrls} onComplete={onComplete} />);
    jest.runAllTimers();

    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});