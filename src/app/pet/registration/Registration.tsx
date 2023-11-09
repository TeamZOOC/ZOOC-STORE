'use client';

import { styled } from 'styled-components';

const Registration = () => (
  <StRegistration>
    <h2>반려동물의 정보를 입력해주세요</h2>
    <p>해당 정보는 상품 제작 및 관리에 활용돼요</p>
  </StRegistration>
);

export default Registration;

const StRegistration = styled.div`
  padding-top: 3.8rem;

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;
