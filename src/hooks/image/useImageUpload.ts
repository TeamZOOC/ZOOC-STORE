import React, { useState } from 'react';

const useImageUpload = () => {
  const [uploadImage, setUploadImage] = useState<File>();
  const [imageThumbnail, setImageThumbnail] = useState<string>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadImage(file);
      createThumbnail(file);
    }
  };

  const createThumbnail = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => setImageThumbnail(reader.result as string);
    reader.onerror = () => console.error('Thumbnail creation failed');
    reader.readAsDataURL(file);
  };

  return { uploadImage, imageThumbnail, handleImageChange };
};

export default useImageUpload;
