'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

import {
  FITAPAT_ADDRESS,
  FITAPAT_APPSTORE_LINK,
  FITAPAT_BUSINESS_REGISTRATION_NUMBER,
  FITAPAT_EMAIL,
  FITAPAT_INSTAGRAM,
  FITAPAT_INTRODUCE,
  FITAPAT_PLAYSTOME_LINK,
  FITAPAT_PRIVACY_POLICY,
  FITAPAT_REPRESENTATIVE,
  FITAPAT_TERMS_OF_SERVICE,
} from '@/constants/fitapatUrls';

import {
  IcBtnAppstore,
  IcBtnInsta,
  IcBtnPlaystore,
  IcFitapatLogo,
} from '../../../../public/icons';

const HomeFooter = () => (
  <StHomeFooter>
    <IcFitapatLogo />
    <StFooterContent>
      <p>대표ㅣ{FITAPAT_REPRESENTATIVE}</p>
      <p>주소ㅣ{FITAPAT_ADDRESS}</p>
      <p>이메일ㅣ{FITAPAT_EMAIL}</p>
      <p>사업자등록 번호ㅣ{FITAPAT_BUSINESS_REGISTRATION_NUMBER}</p>
    </StFooterContent>
    <StHr />
    <StLinks>
      <Link href={FITAPAT_TERMS_OF_SERVICE}>이용약관</Link>|
      <Link href={FITAPAT_PRIVACY_POLICY}>개인정보처리방침</Link>|
      <Link href={FITAPAT_INTRODUCE}>fitapat 소개</Link>
    </StLinks>
    <StSocial>
      <Link href={FITAPAT_PLAYSTOME_LINK}>
        <IcBtnPlaystore />
      </Link>
      <Link href={FITAPAT_APPSTORE_LINK}>
        <IcBtnAppstore />
      </Link>
      <Link href={FITAPAT_INSTAGRAM}>
        <IcBtnInsta />
      </Link>
    </StSocial>
  </StHomeFooter>
);

export default HomeFooter;

const StHomeFooter = styled.footer`
  margin-top: 7rem;
  padding: 3rem 0 2.8rem 3rem;
`;

const StFooterContent = styled.div`
  padding: 1.6rem 0 2rem 0;

  & > p {
    color: ${({ theme }) => theme.colors.zw_darkgray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StHr = styled.hr`
  height: 0.1rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;

const StLinks = styled.div`
  display: flex;
  gap: 1.2rem;

  padding: 2rem 0 2.4rem 0;

  ${({ theme }) => theme.fonts.zw_Body2};

  & > a {
    color: ${({ theme }) => theme.colors.zw_darkgray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StSocial = styled.div`
  display: flex;
  gap: 1rem;
`;
