'use client';

import { useModal } from '@/hooks/modal';
import { cartState } from '@/recoil/cart/atom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

interface CartDeleteModalProps {
  selectedIndex: number;
}

const CartDeleteModal = ({ selectedIndex }: CartDeleteModalProps) => {
  const [cart, setCart] = useRecoilState(cartState);
  const { closeModal } = useModal();

  console.log(selectedIndex);

  const handleDelete = () => {
    setCart(cart.filter((_, index) => index !== selectedIndex));
    closeModal('cartDelete');
  };

  return (
    <StCartDeleteModal>
      <strong>선택한 상품을 삭제하시나요?</strong>
      <p>결제 대상에서 해당 상품이 제외 돼요</p>
      <StButtonWrapper>
        <StCartDeleteButton type="button" onClick={handleDelete}>
          삭제하기
        </StCartDeleteButton>
        <StCancelButton type="button" onClick={() => closeModal('cartDelete')}>
          취소
        </StCancelButton>
      </StButtonWrapper>
    </StCartDeleteModal>
  );
};

export default CartDeleteModal;

const StCartDeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 31.9rem;
  height: 19.8rem;
  padding: 4rem 2.8rem 2.8rem 2.8rem;

  box-sizing: border-box;
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.zw_background};
  box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.15);

  & > strong {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    margin-bottom: 3rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;

  & > button {
    height: 5.1rem;

    border-radius: 0.2rem;
    ${({ theme }) => theme.fonts.zw_Subhead3};
  }
`;

const StCartDeleteButton = styled.button`
  width: 55%;

  background: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
`;

const StCancelButton = styled.button`
  width: 45%;

  background: ${({ theme }) => theme.colors.zw_lightgray};
  color: ${({ theme }) => theme.colors.zw_white};
`;
