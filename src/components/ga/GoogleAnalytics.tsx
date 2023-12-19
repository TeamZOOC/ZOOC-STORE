'use client';

import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-R9TVXP1V79"
    />
    <Script
      id="google-tag-management"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R9TVXP1V79');
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;
