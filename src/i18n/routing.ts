import { defineRouting } from 'next-intl/routing';

import { languages } from './config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages.map(lang => lang.code),

  // Used when no locale matches
  defaultLocale: languages[0].code,

  // Automatically detect locale from Accept-Language header
  localeDetection: true,

  localeCookie: {
    name: 'USER_LOCALE',
    maxAge: 60 * 60 * 24 * 365,
  },
});
