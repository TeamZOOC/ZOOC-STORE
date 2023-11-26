/* eslint-disable jsx-a11y/alt-text */
import localFont from 'next/font/local';
import React from 'react';

import { ModalContainer } from '@/components/modal';
import { SessionProvider } from '@/components/provider';
import { ToastContainer } from '@/components/toast';
import ReactQueryProvider from '@/lib/ReactQueryProvider';
import RecoilRootProvider from '@/lib/RecoilRootProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import Providers from '@/styles/Providers';
import Script from 'next/script';

const PretendardLight = localFont({
  src: './fonts/Pretendard-Light.woff2',
  variable: '--font-pretendard-light',
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
  description: '내가 상상하는 반려동물과의 모든 이야기를 만날 수 있는 곳',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${GmarketSansBold.variable} ${GmarketSansMedium.variable} ${GmarketSansLight.variable} ${PretendardSemiBold.variable} ${PretendardLight.variable} ${PretendardMedium.variable} ${PretendardRegular.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          id="facebook-pixel"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1037687987375235');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1037687987375235&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        <ReactQueryProvider>
          <SessionProvider>
            <Providers>
              <RecoilRootProvider>
                <GlobalStyles />
                {children}
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
