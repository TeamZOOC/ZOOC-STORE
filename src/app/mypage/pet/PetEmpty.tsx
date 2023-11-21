'use client';

import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { IcWarning } from '../../../../public/icons';

const PetEmpty = () => {
  const router = useRouter();
  return (
    <StPetEmpty>
      <StEmpty>
        <IcWarning />
        <h2>아직 등록된 반려동물이 없어요</h2>
        <p>등록 시 자동으로 반려동물의 AI 모델이 생성 돼요</p>
      </StEmpty>
      <StRegisterPetButton
        type="button"
        onClick={() => {
          router.push('/pet/registration');
        }}
      >
        반려동물 등록
      </StRegisterPetButton>
    </StPetEmpty>
  );
};

export default PetEmpty;

export const StPetEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 18.9rem;
  padding: 2.4rem;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background-color: ${({ theme }) => theme.colors.zw_background};
  box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.03);
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

export const StRegisterPetButton = styled.button`
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
