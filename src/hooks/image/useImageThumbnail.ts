import { useEffect, useState } from 'react';

import { createImageURL } from '@/utils/createImageURL';

const useImageThumbnail = (file: File) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setThumbnail(null);
      return;
    }

    createImageURL(file)
      .then((url) => setThumbnail(url))
      .catch((error) => console.error('썸네일 생성 실패', error));
  }, [file]);

  return thumbnail;
};

export default useImageThumbnail;
