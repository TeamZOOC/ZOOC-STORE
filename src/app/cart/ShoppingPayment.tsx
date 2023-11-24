'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { cartState } from '@/recoil/cart/atom';
import { returnPathState } from '@/recoil/order/atom';
import { purchasePriceState, purchaseState } from '@/recoil/purchase/atom';
import { userState } from '@/recoil/user/atom';
import { formatPrice } from '@/utils/formatPrice';

const ShoppingPayment = () => {
  const cart = useRecoilValue(cartState);
  const [, setPurchase] = useRecoilState(purchaseState);
  const [, setPurchasePrice] = useRecoilState(purchasePriceState);
  const userStatus = useRecoilValue(userState);
  const [, setReturnPath] = useRecoilState(returnPathState);
  const router = useRouter();

  const totalSaleQuantity = cart.reduce((total, item) => {
    // 첫 번째 optionList 원소의 quantity와 해당 item의 sale 값을 곱함
    const firstOptionQuantity = item.optionList[0]
      ? item.optionList[0].pieces
      : 0;
    const itemTotal = item.price * firstOptionQuantity;

    // 누적 합계를 계산
    return total + itemTotal;
  }, 0);

  const handleCartToPurchase = () => {
    setPurchase(cart);
    setReturnPath('/order');

    if (userStatus === 'IMAGE_EXISTS') {
      router.push('/order');
      setReturnPath(undefined);
    } else if (userStatus === 'NO_PET') {
      router.push('/pet/registration');
    } else if (userStatus === 'PET_EXISTS' || userStatus === 'DATASET_EXISTS') {
      router.push('/pet/registration/createmodel');
    } else {
      router.push('/auth/login');
    }
  };

  useEffect(() => {
    setPurchasePrice({ totalProductPrice: totalSaleQuantity, deliveryFee: 0 });
  }, [totalSaleQuantity]);

  return (
    <>
      <StShoppingPayment>
        <StShoppingPaymentTitle>결제 정보</StShoppingPaymentTitle>
        <StShoppingPaymentInfoWrapper>
          <StShoppingPaymentInfo>
            <StShoppingPaymentInfoTitle $color="gray">
              상품 금액
            </StShoppingPaymentInfoTitle>
            <StShoppingPaymentInfoPrice>
              {formatPrice(totalSaleQuantity)} 원
            </StShoppingPaymentInfoPrice>
          </StShoppingPaymentInfo>
          <StShoppingPaymentInfo>
            <StShoppingPaymentInfoTitle $color="gray">
              배송비
            </StShoppingPaymentInfoTitle>
            <StShoppingPaymentInfoPrice>0 원</StShoppingPaymentInfoPrice>
          </StShoppingPaymentInfo>
        </StShoppingPaymentInfoWrapper>
        <StShoppingPaymentInfo>
          <StShoppingPaymentInfoTitle $color="black">
            총 결제금액
          </StShoppingPaymentInfoTitle>
          <div>
            <StShoppingPaymentTotalPrice>
              {formatPrice(totalSaleQuantity)}
            </StShoppingPaymentTotalPrice>
            <StShoppingPaymentInfoPrice> 원</StShoppingPaymentInfoPrice>
          </div>
        </StShoppingPaymentInfo>
      </StShoppingPayment>
      <BottomButton
        btnType="button"
        btnName="구매하기"
        disabled={!cart.length}
        activeFunc={handleCartToPurchase}
      />
    </>
  );
};
export default ShoppingPayment;

const StShoppingPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  height: 30rem;
`;

const StShoppingPaymentTitle = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead2}
`;

const StShoppingPaymentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StShoppingPaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StShoppingPaymentInfoTitle = styled.span<{ $color: string }>`
  color: ${({ theme, $color }) =>
    $color === 'gray' ? theme.colors.zw_gray : theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};
`;
const StShoppingPaymentInfoPrice = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_price_middle};
`;

const StShoppingPaymentTotalPrice = styled.span`
  color: ${({ theme }) => theme.colors.zw_point};
  ${({ theme }) => theme.fonts.zw_price_big};
`;
