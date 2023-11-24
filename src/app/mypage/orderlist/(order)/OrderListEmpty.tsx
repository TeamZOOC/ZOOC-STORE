import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';

const OrderListEmpty = () => {
  const router = useRouter();

  return (
    <StOrderListEmpty>
      <h2>아직 주문한 상품이 없어요</h2>
      <p>원하는 상품을 둘러보고 구매해보세요 </p>
      <StGoShoppingBtn
        type="button"
        onClick={() => {
          router.push('/product/all');
        }}
      >
        상품 둘러보기
      </StGoShoppingBtn>
    </StOrderListEmpty>
  );
};

export default OrderListEmpty;

const StOrderListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 22.6rem;

  & > h2 {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead2};
  }
  & > p {
    margin-top: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StGoShoppingBtn = styled.button`
  width: 15.1rem;
  height: 5.1rem;

  margin-top: 4rem;

  background-color: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead3};
`;
