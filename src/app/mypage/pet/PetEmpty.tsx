'use client';

import { styled } from 'styled-components';

import { IcWarning } from '../../../../public/icons';
import { StEditProfileButton, StPetInfo } from './PetInfo';

const PetEmpty = () => (
  <StPetEmpty>
    <StEmpty>
      <IcWarning />
      <h2>아직 등록된 반려동물이 없어요</h2>
      <p>등록 시 자동으로 반려동물의 AI 모델이 생성 돼요</p>
    </StEmpty>
    <StRegisterPetButton type="button">반려동물 등록</StRegisterPetButton>
  </StPetEmpty>
);

export default PetEmpty;

const StPetEmpty = styled(StPetInfo)`
  height: 18.9rem;
`;

const StEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    margin-top: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead2};
  }
  & > p {
    margin-top: 0.4rem;
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StRegisterPetButton = styled(StEditProfileButton)``;
