/* eslint-disable no-new */
import Compressor from 'compressorjs';
import React, { useState } from 'react';

const useMultipleImageUpload = () => {
  const [multipleUploadImages, setMultipleUploadImages] = useState<File[]>([]);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const compressImage = (file: File) =>
    new Promise<File>((resolve) => {
      new Compressor(file, {
        quality: 0.6,
        maxWidth: 1024,
        maxHeight: 1024,
        success: (compressedBlob) => {
          const compressedFile = new File([compressedBlob], file.name, {
            type: file.type,
            lastModified: new Date().getTime(),
          });
          resolve(compressedFile);
        },
      });
    });

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;
    if (!files) return;

    setIsImageLoading(true);
    const compressedFiles: File[] = await Promise.all(
      Array.from(files).map((file) => compressImage(file)),
    );
    setMultipleUploadImages(Array.from(compressedFiles));
    setIsImageLoading(false);
  };

  const handleResetImage = () => {
    setMultipleUploadImages([]);
  };

  return {
    uploadImages: multipleUploadImages,
    handleImageChange,
    handleResetImage,
    isImageLoading,
  };
};

export default useMultipleImageUpload;
