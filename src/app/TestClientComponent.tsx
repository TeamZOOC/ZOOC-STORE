'use client';

import { styled } from 'styled-components';

import { IcBack, IcZooc } from '../../public/icons';
import useModal from '../hooks/modal/useModal';

const TestClientComponent = () => {
  const { openModal } = useModal();

  return (
    <>
      <IcBack />
      <IcZooc />
      <StGmarket>지마켓산스 폰트 GmarketSans price_big ZOOC</StGmarket>
      <StPretendard>Subhead1 프리텐다드 폰트 Pretendard</StPretendard>
      <button
        type="button"
        onClick={() => {
          openModal('quit');
        }}
      >
        모달 열기
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
