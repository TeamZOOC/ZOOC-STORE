import localFont from 'next/font/local';
import React from 'react';

import GlobalStyles from '@/styles/GlobalStyles';
import Providers from '@/styles/Providers';

const Pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

const GmarketSansBold = localFont({
  src: './fonts/GmarketSansBold.woff2',
  variable: '--font-gmarketsans-bold',
});

const GmarketSansMedium = localFont({
  src: './fonts/GmarketSansMedium.woff2',
  variable: '--font-gmarketsans-medium',
});

export const metadata = {
  title: 'ZOOC',
  description: '내가 상상하는 반려동물과의 모든 이야기를 만날 수 있는 곳',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${Pretendard.variable} ${GmarketSansBold.variable} ${GmarketSansMedium.variable}`}
    >
      <body>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
