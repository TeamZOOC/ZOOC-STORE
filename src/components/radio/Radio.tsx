import { styled } from 'styled-components';

const Radio = () => (
  <StRadioBtn>
    <div className="inner-circle" />
  </StRadioBtn>
);

export default Radio;

const StRadioBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  background-color: ${({ theme }) => theme.colors.zw_point};
  border-radius: 50%;

  .inner-circle {
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.zw_white};
    border-radius: 50%;
  }
`;
