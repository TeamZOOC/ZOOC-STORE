import { styled } from 'styled-components';

import { StInfoTitle } from '../productInfo/ProductInfo';

const DeliveryInfo = () => {
  const handleSameAsBuyer = () => {};

  return (
    <StDeliveryInfoSection>
      <StDeliveryTitle>
        배송 정보
        <StSameAsBuyerBtn type="button" onClick={handleSameAsBuyer}>
          구매자와 동일해요
        </StSameAsBuyerBtn>
      </StDeliveryTitle>
    </StDeliveryInfoSection>
  );
};

export default DeliveryInfo;

const StDeliveryInfoSection = styled.div`
  padding: 2rem 2.8rem 4rem 2.8rem;
`;

const StDeliveryTitle = styled(StInfoTitle)`
  display: flex;
  justify-content: space-between;
`;

const StSameAsBuyerBtn = styled.button`
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_gray};
`;
