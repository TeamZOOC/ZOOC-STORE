'use client';

import { signIn } from 'next-auth/react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { LoadingSpinner } from '@/components/loading';
import { loginLoadingState } from '@/recoil/user/atom';

import { IcApple, IcKakao } from '../../../../public/icons';
import { useLogin } from '../hooks/useLogin';

const LoginContent = () => {
  const isLoginLoading = useRecoilValue(loginLoadingState);

  useLogin();

  if (isLoginLoading === true) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <StLoginContent>
        <div>
          <StLoginContentTextWrapper>
            사랑하는 반려동물과
          </StLoginContentTextWrapper>
          <StLoginContentTextWrapper>
            매순간 <StLoginContentHorizontalLine />
          </StLoginContentTextWrapper>
          <StLoginContentTextWrapper>
            <p>함께</p>하는 최고의 방법
          </StLoginContentTextWrapper>
        </div>
        <div>
          <StLoginContentSubText>
            1초만에 가입하고 반려동물 사진 6장만
          </StLoginContentSubText>
          <StLoginContentSubText>
            등록하면 간편하게 주문 완료
          </StLoginContentSubText>
        </div>
      </StLoginContent>
      <StBottomButtonWrapper>
        <StAppleLoginButton type="button" onClick={() => signIn('apple')}>
          <IcApple />
          Apple로 로그인
        </StAppleLoginButton>
        <StKakaoLoginButton type="button" onClick={() => signIn('kakao')}>
          <IcKakao />
          카카오톡으로 로그인
        </StKakaoLoginButton>
      </StBottomButtonWrapper>
    </>
  );
};

export default LoginContent;

const StLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StLoginContentTextWrapper = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.zw_black};
  font-family: var(--font-gmarketsans-light);
  font-size: 3rem;
  font-style: normal;
  font-weight: 300;
  line-height: 4rem; /* 133.333% */
  letter-spacing: -0.03rem;

  p {
    font-family: var(--font-gmarketsans-medium);
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 4rem; /* 133.333% */
    letter-spacing: -0.03rem;
  }
`;

const StLoginContentHorizontalLine = styled.div`
  width: 16.7rem;
  height: 0.1rem;
  margin-left: 0.5rem;

  background-color: ${({ theme }) => theme.colors.zw_darkgray};
`;

const StLoginContentSubText = styled.p`
  color: ${({ theme }) => theme.colors.zw_gray};
  font-family: var(--font-pretendard-light);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.4rem; /* 150% */
  letter-spacing: -0.0048rem;
`;

const StBottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const StSocialLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.946rem;

  width: 100%;
  width: 43rem;
  padding: 2.8rem 0;

  ${({ theme }) => theme.fonts.zw_Subhead1};
`;
const StAppleLoginButton = styled(StSocialLoginButton)`
  background-color: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
`;
const StKakaoLoginButton = styled(StSocialLoginButton)`
  background-color: #ffe700;
  color: #371c1d;
`;
