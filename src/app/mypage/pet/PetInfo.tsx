'use client';

import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { LoadingSpinner } from '@/components/loading';

import { ImgProfileEmpty } from '../../../../public/images';
import useGetPet from '../hooks/useGetPetInfo';
import PetEmpty, { StPetEmpty, StRegisterPetButton } from './PetEmpty';

const PetInfo = () => {
  const { petInfo, isLoading, isError } = useGetPet();
  const router = useRouter();
  const accessToken = getCookie('accessToken');

  if (!accessToken || isError) router.push('/auth/login');
  if (isLoading) return <LoadingSpinner />;

  return petInfo ? (
    <StPetInfo>
      <StProfile>
        {petInfo.photo ? (
          <StProfileImage src={petInfo.photo} alt="프로필 이미지" />
        ) : (
          <Image
            src={ImgProfileEmpty}
            width={70}
            height={70}
            alt="프로필 이미지 없음"
          />
        )}
        <StPetProfile>
          <h2>{petInfo.name}</h2>
          <p>{petInfo.breed}</p>
        </StPetProfile>
      </StProfile>
      <StEditProfileButton
        type="button"
        onClick={() => {
          router.push(`/pet/edit?id=${petInfo.id}`);
        }}
      >
        프로필 수정
      </StEditProfileButton>
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

const StProfileImage = styled.img`
  width: 7rem;
  height: 7rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.zw_darkgray};

  object-fit: cover;
`;

const StEditProfileButton = styled(StRegisterPetButton)``;
