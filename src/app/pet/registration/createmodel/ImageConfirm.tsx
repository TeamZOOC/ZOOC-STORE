/* eslint-disable react/no-array-index-key */

'use client';

import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { Thumbnail } from '@/components/image';
import { uploadImagesState } from '@/recoil/pet/atom';

const ImageConfirm = () => {
  const [uploadImages, setUploadImages] =
    useRecoilState<File[]>(uploadImagesState);

  const handleResetImage = () => {
    setUploadImages([]);
  };

  return (
    <StImageConfirm>
      <h2>아래 사진으로 확정하시나요?</h2>
      <p>선택한 사진으로 AI 모델 생성이 진행돼요</p>
      <StThumbnailContainer>
        {uploadImages.map((uploadImage, index) => (
          <Thumbnail key={index} file={uploadImage} />
        ))}
      </StThumbnailContainer>
      <StResetButton type="button" onClick={handleResetImage}>
        사진을 다시 고를게요
      </StResetButton>
    </StImageConfirm>
  );
};

export default ImageConfirm;

const StImageConfirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 9rem);
  grid-gap: 1rem;
  justify-content: center;
  align-content: start;

  width: 100%;
  max-height: 52rem;
  overflow-y: auto;

  padding: 0.8rem 1.4rem;
  margin: auto;
  box-sizing: border-box;

  & > img {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
  }
`;

const StResetButton = styled.button`
  position: absolute;
  bottom: 9.3rem;

  margin: 0.8rem 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_gray};
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};
`;
