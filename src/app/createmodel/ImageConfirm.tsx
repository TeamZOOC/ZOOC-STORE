import { styled } from 'styled-components';

interface ImageConfirmProps {
  imageThumbnails: string[];
}

const ImageConfirm = ({ imageThumbnails }: ImageConfirmProps) => (
  <StImageConfirm>
    <h2>아래 사진으로 확정하시나요?</h2>
    <p>선택한 사진으로 AI 모델 생성이 진행돼요</p>
    <StThumbnailContainer>
      {imageThumbnails.map((url) => (
        <StThumbnail key={url} src={url} alt="업로드한 이미지" />
      ))}
    </StThumbnailContainer>
  </StImageConfirm>
);

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

  width: 100%;
  max-height: 47.6rem;
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

const StThumbnail = styled.img``;
