'use client';

import useImageThumbnail from '@/hooks/image/useImageThumbnail';

interface ThumbnailProps {
  file: File;
}

const Thumbnail = ({ file }: ThumbnailProps) => {
  const thumbnail = useImageThumbnail(file);
  if (!thumbnail) return null;
  return <img src={thumbnail} alt="썸네일 이미지" />;
};

export default Thumbnail;
