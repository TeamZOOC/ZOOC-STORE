'use client';

import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';

const ShoppingCartEmpty = () => {
  const router = useRouter();
  return (
    <>
      <StShoppingCartEmpty>
        <ShoppingCartEmptyContent>
          <StShoppingCartEmptyTitle>
            <p>장바구니에 아직 담은 상품이 없어요</p>
            <p>원하는 상품을 둘러보고 구매해보세요</p>
          </StShoppingCartEmptyTitle>
          <StShoppingCartEmptyButton
            type="button"
            onClick={() => router.push('/product/all')}
          >
            상품 둘러보기
          </StShoppingCartEmptyButton>
        </ShoppingCartEmptyContent>
      </StShoppingCartEmpty>
      <BottomButton
        btnType="button"
        btnName="구매하기"
        disabled
        activeFunc={() => {}}
      />
    </>
  );
};

export default ShoppingCartEmpty;

const StShoppingCartEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;
`;

const ShoppingCartEmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const StShoppingCartEmptyTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    &:first-child {
      color: ${({ theme }) => theme.colors.zw_black};
      ${({ theme }) => theme.fonts.zw_Subhead2};
    }

    &:last-child {
      margin-top: 0.8rem;

      color: ${({ theme }) => theme.colors.zw_gray};
      ${({ theme }) => theme.fonts.zw_Body1};
    }
  }
`;

const StShoppingCartEmptyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15.1rem;
  margin-top: 4rem;
  padding: 1.6rem 0;

  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead3};
`;
