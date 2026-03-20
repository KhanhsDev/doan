import { vi } from 'date-fns/locale';

import type { Locale } from 'date-fns';

export const getCustomLocale = (lng: string): Locale => ({
  ...vi,
  options: {
    ...vi.options,
    weekStartsOn: 0, // Bắt đầu tuần từ Chủ Nhật (0)
  },
  localize: {
    ordinalNumber: () => '',
    era: () => '',
    quarter: () => '',
    dayPeriod: () => '',
    ...vi.localize,
    month: (n: number, options?: { width?: string; context?: string }) => {
      const englishMonthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      return englishMonthNames[n] + ',';
    },
    day: (n: number, options?: { width?: string; context?: string }) => {
      const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
      return dayNames[n];
    },
  },
});
