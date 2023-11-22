import React, { useState } from 'react';

const useMultipleImageUpload = () => {
  const [multipleUploadImages, setMultipleUploadImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) return;
    setMultipleUploadImages(Array.from(files));
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
