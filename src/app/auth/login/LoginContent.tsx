'use client';

import Lottie from 'lottie-react';
import { signIn } from 'next-auth/react';
import { styled } from 'styled-components';

import { IcApple, IcKakao } from '../../../../public/icons';
import { AiLoading } from '../../../../public/lottie';
import { useKakaoLogin } from '../hooks/useKakaoLogin';

const LoginContent = () => {
  useKakaoLogin();
  return (
    <>
      <StLoginContent>
        {/* <Lottie className="lottie" animationData={AiLoading} loop /> */}
        <div>
          <StLoginContentTextWrapper>
            반려동물과의 <StSpace /> <p>일상</p>을
          </StLoginContentTextWrapper>
          <StLoginContentTextWrapper>
            <p>쭉</p> <StLoginContentHorizontalLine />
          </StLoginContentTextWrapper>
          <StLoginContentTextWrapper>
            <p>간직</p>하는 특별한 방법
          </StLoginContentTextWrapper>
        </div>
        <div>
          <StLoginContentSubText>1초만에 가입하고 우리집</StLoginContentSubText>
          <StLoginContentSubText>반려동물 굿즈 만들기</StLoginContentSubText>
        </div>
      </StLoginContent>
      <StBottomButtonWrapper>
        <StAppleLoginButton type="button" onClick={() => signIn('apple')}>
          <IcApple />
          Apple로 로그인
        </StAppleLoginButton>
        <StKakaoLoginButton type="button" onClick={() => signIn('kakao')}>
          <IcKakao />
          Kakao로 로그인
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

  width: 24.7rem;
`;

const StLoginContentTextWrapper = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.zw_black};
  font-family: Gmarket Sans;
  font-size: 3rem;
  font-style: normal;
  font-weight: 300;
  line-height: 4rem; /* 133.333% */
  letter-spacing: -0.03rem;

  p {
    font-family: Gmarket Sans;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 4rem; /* 133.333% */
    letter-spacing: -0.03rem;
  }
`;

const StSpace = styled.div`
  width: 1rem;
  background-color: transparent;
`;

const StLoginContentHorizontalLine = styled.div`
  width: 100%;
  height: 0.1rem;
  margin-left: 1.5rem;

  background-color: ${({ theme }) => theme.colors.zw_darkgray};
`;

const StLoginContentSubText = styled.p`
  color: ${({ theme }) => theme.colors.zw_gray};
  font-family: Pretendard;
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

  width: 100%;
`;

const StSocialLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.946rem;

  width: 100%;
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
