import { vi } from 'date-fns/locale';

import type { Locale } from 'date-fns';

import { LANG } from 'global';

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
      if (lng === LANG.EN) {
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
      }

      const monthNames = [
        `Tháng 01 /`,
        `Tháng 02 /`,
        `Tháng 03 /`,
        `Tháng 04 /`,
        `Tháng 05 /`,
        `Tháng 06 /`,
        `Tháng 07 /`,
        `Tháng 08 /`,
        `Tháng 09 /`,
        `Tháng 10 /`,
        `Tháng 11 /`,
        `Tháng 12 /`,
      ];
      return monthNames[n];
    },
    day: (n: number, options?: { width?: string; context?: string }) => {
      const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
      const englishDayNames = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
      return lng === LANG.VI ? dayNames[n] : englishDayNames[n];
    },
  },
});
