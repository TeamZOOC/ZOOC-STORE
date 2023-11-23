import { uploadDatasetImages } from '@/apis/pet';
import { useMutation } from '@tanstack/react-query';

interface UploadDatasetImagesParams {
  datasetId: string;
  files: File[];
}

const useUploadDatasetImages = () => {
  const { mutateAsync, isLoading, isError } = useMutation(
    async ({ datasetId, files }: UploadDatasetImagesParams) =>
      uploadDatasetImages(datasetId, files),
  );

  return {
    uploadDatasetImages: mutateAsync,
    isLoading,
    error: isError,
  };
};

export default useUploadDatasetImages;
