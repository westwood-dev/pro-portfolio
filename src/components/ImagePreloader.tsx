import { useEffect } from 'react';

interface ImagePreloaderProps {
  imageUrls: string[];
  onComplete?: () => void;
}

export const ImagePreloader = ({ imageUrls, onComplete }: ImagePreloaderProps) => {
  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url: string) => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          onComplete?.();
        }
      };
      img.onerror = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          onComplete?.();
        }
      };
      img.src = url;
    };

    imageUrls.forEach(preloadImage);

    // If no images to preload, call onComplete immediately
    if (totalImages === 0) {
      onComplete?.();
    }
  }, [imageUrls, onComplete]);

  return null;
};