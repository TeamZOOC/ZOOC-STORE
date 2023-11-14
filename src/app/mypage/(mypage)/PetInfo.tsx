'use client';

import { styled } from 'styled-components';

const PetInfo = () => (
  <StPetInfo>
    <StEditProfileButton type="button">프로필 수정</StEditProfileButton>
  </StPetInfo>
);

export default PetInfo;

const StPetInfo = styled.div`
  width: 100%;
  height: 18.2rem;
  padding: 2.4rem;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background-color: ${({ theme }) => theme.colors.zw_background};
  box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.03);
`;

const StEditProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4.4rem;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};
`;
