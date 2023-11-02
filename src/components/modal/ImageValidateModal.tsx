import { styled } from 'styled-components';

interface ImageValidateModalProps {
  title: string;
  content: string;
  handleReset: () => void;
  handleCancel: () => void;
}

const ImageValidateModal = ({
  title,
  content,
  handleReset,
  handleCancel,
}: ImageValidateModalProps) => (
  <StImageValidateModal>
    <strong>{title}</strong>
    <p>{content}</p>
    <StButtonWrapper>
      <StCancelButton type="button" onClick={handleCancel}>
        취소
      </StCancelButton>
      <StResetButton type="button" onClick={handleReset}>
        다시 고르기
      </StResetButton>
    </StButtonWrapper>
  </StImageValidateModal>
);

export default ImageValidateModal;

const StImageValidateModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 31.9rem;
  height: 19.8rem;
  padding: 4rem 2.8rem 2.8rem 2.8rem;

  box-sizing: border-box;
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.zw_background};
  box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.15);

  & > strong {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    margin-bottom: 3rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;

  & > button {
    height: 5.1rem;

    border-radius: 0.2rem;
    ${({ theme }) => theme.fonts.zw_Subhead3};
  }
`;

const StResetButton = styled.button`
  width: 55%;

  background: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
`;

const StCancelButton = styled.button`
  width: 45%;

  background: ${({ theme }) => theme.colors.zw_lightgray};
  color: ${({ theme }) => theme.colors.zw_white};
`;
