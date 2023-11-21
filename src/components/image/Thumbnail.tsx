'use client';

import { useImageThumbnail } from '@/hooks/image';

interface ThumbnailProps {
  file: File;
}
// TODO 썸네일 생성될때까지 로딩 이미지 띄우기
const Thumbnail = ({ file }: ThumbnailProps) => {
  const thumbnail = useImageThumbnail(file);
  if (!thumbnail) return null;
  return <img src={thumbnail} alt="썸네일 이미지" />;
};

export default Thumbnail;
