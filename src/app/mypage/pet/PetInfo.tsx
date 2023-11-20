'use client';

import { styled } from 'styled-components';

import useGetPet from '../hooks/useGetPetInfo';
import PetEmpty, { StPetEmpty, StRegisterPetButton } from './PetEmpty';

const PetInfo = () => {
  const { petInfo } = useGetPet();

  return petInfo ? (
    <StPetInfo>
      <StProfile>
        <StProfileImage />
        <StPetProfile>
          <h2>{petInfo.name}</h2>
          <p>{petInfo.breed}</p>
        </StPetProfile>
      </StProfile>
      <StEditProfileButton type="button">프로필 수정</StEditProfileButton>
    </StPetInfo>
  ) : (
    <PetEmpty />
  );
};

export default PetInfo;

const StPetInfo = styled(StPetEmpty)`
  height: 18.2rem;
`;

const StProfile = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const StPetProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;

  & > h2 {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StProfileImage = styled.div`
  width: 7rem;
  height: 7rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.zw_darkgray};
`;

const StEditProfileButton = styled(StRegisterPetButton)``;
