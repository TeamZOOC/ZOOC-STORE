/* eslint-disable no-new */
import Compressor from 'compressorjs';
import heic2any from 'heic2any';
import React, { useState } from 'react';

const useMultipleImageUpload = () => {
  const [multipleUploadImages, setMultipleUploadImages] = useState<File[]>([]);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const compressImage = (file: File) =>
    new Promise<File>((resolve, reject) => {
      const compressToWebp = (inputFile: File) => {
        new Compressor(inputFile, {
          quality: 0.6,
          maxWidth: 1024,
          maxHeight: 1024,
          convertSize: 0,
          mimeType: 'image/webp',
          success: (compressedBlob) => {
            const compressedFileName = `${inputFile.name.replace(
              /\.[^/.]+$/,
              '',
            )}.webp`;
            const compressedFile = new File(
              [compressedBlob],
              compressedFileName,
              {
                type: 'image/webp',
                lastModified: new Date().getTime(),
              },
            );
            resolve(compressedFile);
          },
          error: (err) => {
            reject(err);
          },
        });
      };

      if (file.type === 'image/heic') {
        heic2any({
          blob: file,
          toType: 'image/webp',
        })
          .then((convertedBlob) => {
            const convertedBlobSingle = Array.isArray(convertedBlob)
              ? convertedBlob[0]
              : convertedBlob;
            const convertedFile = new File(
              [convertedBlobSingle],
              `${file.name.replace(/\.[^/.]+$/, '')}.webp`,
              {
                type: 'image/webp',
              },
            );
            compressToWebp(convertedFile);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        compressToWebp(file);
      }
    });

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;
    if (!files) return;

    setIsImageLoading(true);
    const changedFiles: File[] = await Promise.all(
      Array.from(files).map((file) => compressImage(file)),
    );
    setMultipleUploadImages(Array.from(changedFiles));
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
