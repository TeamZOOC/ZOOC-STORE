import { styled } from 'styled-components';

import { ProductInfo } from '@/types/order';
import { formatPrice } from '@/utils/formatPrice';

import DeliveryLabel from './DeliveryLabel';

interface OrderProductProps {
  order: ProductInfo;
}

const OrderProduct = ({ order }: OrderProductProps) => {
  const { pieces, name, price, image, deliveryState, optionDetails } = order;
  const optionsString =
    optionDetails && optionDetails.length > 0 ? optionDetails.join(' | ') : '';

  return (
    <StOrderProductWrapper>
      <StOrderContent>
        <StProductImage src={image} alt={name} />
        <StOrderDetail>
          {deliveryState && <DeliveryLabel deliveryState={deliveryState} />}
          <StProductTitle>
            {name} <span>{pieces}개</span>
          </StProductTitle>
          <StProductPrice>{formatPrice(price)}</StProductPrice>
          <StProductOptions>
            <span>{optionsString}</span>
          </StProductOptions>
        </StOrderDetail>
      </StOrderContent>
    </StOrderProductWrapper>
  );
};

export default OrderProduct;

const StOrderProductWrapper = styled.div``;

const StOrderContent = styled.div`
  display: flex;
  gap: 2rem;
`;

const StProductImage = styled.img`
  object-fit: cover;

  width: 8.2rem;
  height: 10.9rem;

  background: ${({ theme }) => theme.colors.zw_lightgray};
`;

const StProductTitle = styled.p`
  height: 2rem;
  margin-bottom: 0.6rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead3};

  & > span {
    padding-left: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_lightgray};
    ${({ theme }) => theme.fonts.zw_Body2};
    height: 2rem;
  }
`;

const StProductPrice = styled.p`
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.zw_darkgray};
  ${({ theme }) => theme.fonts.zw_price_middle};

  & > span {
    padding-right: 0.6rem;
    color: ${({ theme }) => theme.colors.zw_point};
  }
`;

const StProductOptions = styled.p`
  & > span {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StOrderDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
