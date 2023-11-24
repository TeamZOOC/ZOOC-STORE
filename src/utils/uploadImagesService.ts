import { uploadDatasetImages } from '@/apis/pet';

export const uploadImagesService = async (
  datasetId: string,
  images: File[],
) => {
  try {
    await uploadDatasetImages(datasetId, images);
  } catch (error) {
    console.error(error);
  }
};
