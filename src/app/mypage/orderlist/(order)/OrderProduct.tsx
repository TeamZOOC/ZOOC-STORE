import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { ProductInfo } from '@/types/order';
import { formatPrice } from '@/utils/formatPrice';

import DeliveryLabel from './DeliveryLabel';

interface OrderProductProps {
  order: ProductInfo;
}

const OrderProduct = ({ order }: OrderProductProps) => {
  const { id, pieces, name, price, sale, image, deliveryState, optionDetails } =
    order;
  const optionsString =
    optionDetails && optionDetails.length > 0 ? optionDetails.join(' | ') : '';
  const router = useRouter();

  return (
    <StOrderProductWrapper onClick={() => router.push(`/product/all/${id}`)}>
      <StOrderContent>
        <StProductImage src={image} alt={name} />
        <StOrderDetail>
          {deliveryState && <DeliveryLabel deliveryState={deliveryState} />}
          <StProductTitle>
            <StProductName>{name}</StProductName>
            <StProductPieces>{pieces}개</StProductPieces>
          </StProductTitle>
          <StProductPrice>
            {sale && sale !== 0 && (
              <StCartItemSalePercent>{sale}%</StCartItemSalePercent>
            )}
            {formatPrice(price)}
          </StProductPrice>
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

  min-width: 8.2rem;
  max-width: 8.2rem;
  height: 10.9rem;

  background: ${({ theme }) => theme.colors.zw_lightgray};
`;

const StProductTitle = styled.div`
  display: flex;
  gap: 0.8rem;

  height: fit-content;
  margin-bottom: 0.6rem;

  /* overflow: hidden;  */
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
  /* word-break: keep-all; */
`;

const StProductName = styled.p`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead3};
`;

const StProductPieces = styled.span`
  color: ${({ theme }) => theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_Body2};
  height: 2rem;

  white-space: nowrap;
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

const StCartItemSalePercent = styled.span`
  ${({ theme }) => theme.fonts.zw_price_middle};
  color: ${({ theme }) => theme.colors.zw_point};
`;
