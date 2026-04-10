'use client';

import { useTransition } from 'react';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('vi')}
        disabled={isPending || locale === 'vi'}
        className={`px-3 py-1 rounded transition-colors ${
          locale === 'vi'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        } disabled:opacity-50`}
      >
        VI
      </button>

      <button
        onClick={() => changeLanguage('en')}
        disabled={isPending || locale === 'en'}
        className={`px-3 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        } disabled:opacity-50`}
      >
        EN
      </button>
    </div>
  );
}
