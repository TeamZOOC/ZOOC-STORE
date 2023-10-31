import { styled } from 'styled-components';

interface PopupButtonProps {
  btnName: string;
  handleClick: () => void;
}
const PopupButton = ({ btnName, handleClick }: PopupButtonProps) => (
  <StPopupButton type="button" onClick={handleClick}>
    {btnName}
  </StPopupButton>
);

export default PopupButton;

const StPopupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 27.1rem;
  height: 5.1rem;

  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead3};
`;
