'use client';

import { styled } from 'styled-components';

import useGetPet from '../hooks/useGetPetInfo';

const PetInfo = () => {
  const { petInfo } = useGetPet();

  return (
    <StPetInfo>
      <StProfile>
        <StProfileImage />
        <StPetProfile>
          <h2>{petInfo?.name}</h2>
          <p>{petInfo?.breed}</p>
        </StPetProfile>
      </StProfile>
      <StEditProfileButton type="button">프로필 수정</StEditProfileButton>
    </StPetInfo>
  );
};

export default PetInfo;

export const StPetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 18.2rem;
  padding: 2.4rem;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background-color: ${({ theme }) => theme.colors.zw_background};
  box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.03);
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

export const StEditProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 4.4rem;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};
`;
