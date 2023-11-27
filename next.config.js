/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    domains: ['zooc-bucket.s3.ap-northeast-2.amazonaws.com'],
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
};
