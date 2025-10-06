import data from './placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/types';

const placeholderImagesData: ImagePlaceholder[] = data.placeholderImages;

export const placeholderImages = new Map<string, ImagePlaceholder>(
  placeholderImagesData.map(image => [image.id, image])
);
