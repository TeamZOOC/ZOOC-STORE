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
      <StConfirmText>
        <h2>아래 사진으로 확정하시나요?</h2>
        <p>선택한 사진으로 AI 모델 생성이 진행돼요</p>
      </StConfirmText>
      <StThumbnailContainer>
        {uploadImages.map((uploadImage, index) => (
          <Thumbnail key={index} file={uploadImage} />
        ))}
      </StThumbnailContainer>
      <StStResetButtonWrapper>
        <StResetButton type="button" onClick={handleResetImage}>
          사진을 다시 고를게요
        </StResetButton>
      </StStResetButtonWrapper>
    </StImageConfirm>
  );
};

export default ImageConfirm;

const StImageConfirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StConfirmText = styled.div`
  position: absolute;
  top: 6.8rem;
  z-index: 1;

  width: 100%;
  padding-top: 1.6rem;
  background-color: ${({ theme }) => theme.colors.zw_background};

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
    text-align: center;
  }
  & > p {
    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
    text-align: center;
  }
`;

const StThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 9rem);
  grid-gap: 1rem;
  justify-content: center;
  align-content: start;

  width: 100%;
  max-height: calc(100dvh - 30.3rem);
  overflow-y: auto;

  padding: 0.8rem 1.4rem;
  margin-top: 6.71rem;
  box-sizing: border-box;

  & > img {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
  }
`;

const StStResetButtonWrapper = styled.div`
  position: absolute;
  bottom: 7.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 6.8rem;

  background-color: ${({ theme }) => theme.colors.zw_background};
`;

const StResetButton = styled.button`
  margin: 0.8rem 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_gray};
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};
`;
