/* eslint-disable jsx-a11y/alt-text */
import localFont from 'next/font/local';
import React from 'react';

import Fpixel from '@/components/fpixel/Fpixel';
import { ModalContainer } from '@/components/modal';
import { SessionProvider } from '@/components/provider';
import { ToastContainer } from '@/components/toast';
import ReactQueryProvider from '@/lib/ReactQueryProvider';
import RecoilRootProvider from '@/lib/RecoilRootProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import Providers from '@/styles/Providers';
import { Analytics } from '@vercel/analytics/react';

const PretendardLight = localFont({
  src: './fonts/Pretendard-Light.woff2',
  variable: '--font-pretendard-light',
});

const PretendardBold = localFont({
  src: './fonts/Pretendard-Bold.woff2',
  variable: '--font-pretendard-bold',
});

const PretendardSemiBold = localFont({
  src: './fonts/Pretendard-SemiBold.woff2',
  variable: '--font-pretendard-semi-bold',
});
const PretendardMedium = localFont({
  src: './fonts/Pretendard-Medium.woff2',
  variable: '--font-pretendard-medium',
});

const PretendardRegular = localFont({
  src: './fonts/Pretendard-Regular.woff2',
  variable: '--font-pretendard-regular',
});

const PretendardExtraLight = localFont({
  src: './fonts/Pretendard-ExtraLight.woff2',
  variable: '--font-pretendard-extralight',
});

const GmarketSansBold = localFont({
  src: './fonts/GmarketSansBold.woff2',
  variable: '--font-gmarketsans-bold',
});

const GmarketSansMedium = localFont({
  src: './fonts/GmarketSansMedium.woff2',
  variable: '--font-gmarketsans-medium',
});

const GmarketSansLight = localFont({
  src: '/fonts/GmarketSansLight.woff2',
  variable: '--font-gmarketsans-light',
});

export const metadata = {
  title: 'fitapat',
  description: '반려동물과 당신만의 설렘을 포장합니다',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${GmarketSansBold.variable} ${GmarketSansMedium.variable} ${GmarketSansLight.variable} ${PretendardSemiBold.variable} ${PretendardLight.variable} ${PretendardMedium.variable} ${PretendardRegular.variable} ${PretendardExtraLight.variable} ${PretendardBold.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=315317384790025&ev=PageView&noscript=1"
          />
        </noscript>
        <meta property="og:url" content="https://www.fitapat.com/" />
        <meta property="og:title" content="fitapat" />
        <meta property="og:site_name" content="fitapat" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://velog.velcdn.com/images/imphj3/post/ea94be96-de31-480c-a91a-2d0f887f6b91/image.png"
        />
        <meta
          property="og:description"
          content="반려동물과 당신만의 설렘을 포장합니다"
        />
      </head>
      <body>
        <Fpixel />
        <ReactQueryProvider>
          <SessionProvider>
            <Providers>
              <RecoilRootProvider>
                <GlobalStyles />
                {children}
                <Analytics />
                <div id="portal" />
                <ModalContainer />
                <ToastContainer />
              </RecoilRootProvider>
            </Providers>
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
