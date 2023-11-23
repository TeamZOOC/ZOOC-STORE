'use client';

import { styled } from 'styled-components';

import { useToast } from '@/hooks/toast';

import { IcBack, IcZooc } from '../../public/icons';
import useModal from '../hooks/modal/useModal';

const TestClientComponent = () => {
  const { openModal, closeModal } = useModal();
  const { showToast } = useToast();

  return (
    <>
      <IcBack />
      <IcZooc />
      <StGmarket>지마켓산스 폰트 GmarketSans price_big ZOOC</StGmarket>
      <StPretendard>Subhead1 프리텐다드 폰트 Pretendard</StPretendard>
      <button
        type="button"
        onClick={() => {
          showToast('delivery');
        }}
      >
        토스트 열기
      </button>
      <button
        type="button"
        onClick={() => {
          openModal('orderQuit');
        }}
      >
        구매 그만두기 모달 열기
      </button>
      <button
        type="button"
        onClick={() => {
          openModal('imageValidate', {
            title: '현재 고른 사진이 너무 많아요',
            content: '8장 이상 15장 미만의 사진을 선택해주세요',
            handleReset: () => {
              console.log('다시 고르기');
            },
            handleCancel: () => {
              closeModal('imageValidate');
            },
          });
        }}
      >
        이미지 재선택 모달 열기
      </button>
    </>
  );
};

export default TestClientComponent;

const StGmarket = styled.p`
  color: ${({ theme }) => theme.colors.zw_point};
  ${({ theme }) => theme.fonts.zw_price_big};
`;

const StPretendard = styled.p`
  color: ${({ theme }) => theme.colors.zw_darkgray};
  ${({ theme }) => theme.fonts.zw_Subhead1};
`;
