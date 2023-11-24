import { SetterOrUpdater } from 'recoil';

import { uploadDatasetImages } from '@/apis/pet';
import { UploadInfo } from '@/types/pet';

export const uploadImagesService = async (
  datasetId: string,
  images: File[],
  setUpload: SetterOrUpdater<UploadInfo>,
) => {
  try {
    setUpload((prev) => ({ ...prev, isUploading: true }));
    await uploadDatasetImages(datasetId, images);
    setUpload((prev) => ({ ...prev, isUploading: false, progress: 100 }));
  } catch (error) {
    const err =
      error instanceof Error ? error : new Error('An unknown error occurred');
    setUpload((prev) => ({
      ...prev,
      isUploading: false,
      error: err,
      progress: 0,
    }));
    console.error(error);
  }
};
