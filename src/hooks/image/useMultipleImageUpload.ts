/* eslint-disable no-new */
import Compressor from 'compressorjs';
import React, { useState } from 'react';

const useMultipleImageUpload = () => {
  const [multipleUploadImages, setMultipleUploadImages] = useState<File[]>([]);

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

    if (event.target.files) {
      const compressedFiles: File[] = await Promise.all(
        Array.from(event.target.files).map((file) => compressImage(file)),
      );
      setMultipleUploadImages(Array.from(compressedFiles));
    }
  };

  const handleResetImage = () => {
    setMultipleUploadImages([]);
  };

  return {
    uploadImages: multipleUploadImages,
    handleImageChange,
    handleResetImage,
  };
};

export default useMultipleImageUpload;
