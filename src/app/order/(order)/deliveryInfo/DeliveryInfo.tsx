import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { buyerState } from '@/recoil/order/atom';

import { StInfoTitle } from '../productsInfo/ProductsInfo';
import NewDeliveryForm from './NewDeliveryForm';

const DeliveryInfo = () => {
  const buyerInfo = useRecoilValue(buyerState);
  const [sameAsBuyerSelected, setSameAsBuyerSelected] = useState(false);

  const handleSameAsBuyer = () => {
    setSameAsBuyerSelected(true);
  };

  useEffect(() => {
    if (sameAsBuyerSelected) {
      setSameAsBuyerSelected(false);
    }
  }, [sameAsBuyerSelected]);

  return (
    <StDeliveryInfoSection>
      <StDeliveryTitle>
        배송 정보
        <StSameAsBuyerBtn type="button" onClick={handleSameAsBuyer}>
          구매자와 동일해요
        </StSameAsBuyerBtn>
      </StDeliveryTitle>
      <StAddressForm>
        <NewDeliveryForm
          buyerName={sameAsBuyerSelected ? buyerInfo.buyerName : undefined}
          buyerPhone={sameAsBuyerSelected ? buyerInfo.buyerPhone : undefined}
        />
      </StAddressForm>
    </StDeliveryInfoSection>
  );
};

export default DeliveryInfo;

const StDeliveryInfoSection = styled.div`
  padding: 2rem 2.8rem;
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

const StAddressForm = styled.div``;
