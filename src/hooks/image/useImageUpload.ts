import React, { useState } from 'react';

const useImageUpload = () => {
  const [uploadImage, setUploadImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) return;
    setUploadImage(files[0]);
  };

  const handleResetImage = () => {
    setUploadImage(null);
  };

  return {
    uploadImage,
    handleImageChange,
    handleResetImage,
  };
};

export default useImageUpload;
