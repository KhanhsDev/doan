import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  env: {
    HOT_LINE: process.env.NEXT_PUBLIC_HOT_LINE,
    API_KEYS: process.env.NEXT_PUBLIC_API_KEYS,
    FACEBOOK_LINK: process.env.NEXT_PUBLIC_FACEBOOK_LINK,
    GITHUB_LINK: process.env.NEXT_PUBLIC_GITHUB_LINK,
    YOUTUBE_LINK: process.env.NEXT_PUBLIC_YOUTUBE_LINK,
    INSTAGRAM_LINK: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
  },
};

export default withNextIntl(nextConfig);
