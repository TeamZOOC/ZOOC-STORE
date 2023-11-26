import { styled } from 'styled-components';

interface DeliveryLabelProps {
  deliveryState: string;
}

const DeliveryLabel = ({ deliveryState }: DeliveryLabelProps) => (
  <StDeliveryLabel $isCompleted={deliveryState === '배송완료'}>
    {deliveryState}
  </StDeliveryLabel>
);

export default DeliveryLabel;

const StDeliveryLabel = styled.label<{ $isCompleted: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: fit-content;
  padding: 0.2rem 0.6rem;
  margin-bottom: 0.8rem;

  border-radius: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.zw_point};

  color: ${({ theme }) => theme.colors.zw_point};
  text-align: center;
  font-family: var(--font-pretendard-semi-bold);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 1.56rem */

  ${({ $isCompleted, theme }) =>
    $isCompleted
      ? `background-color: ${theme.colors.zw_point};
     color:  ${theme.colors.zw_white};`
      : `
     color:  ${theme.colors.zw_point};`}
`;
