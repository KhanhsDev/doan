'use client';

import './style.scss';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from 'react';
import { Calendar } from 'react-date-range';
import { Popover, PopoverPanel, PopoverButton } from '@headlessui/react';

import clsx from 'clsx';
import { addDays } from 'date-fns';
import { useParams } from 'next/navigation';
import { useTranslation } from 'app/i18n/client';
import CalendarIcon from 'assets/svg/calendar.svg';

import type { FocusEventHandler } from 'react';

import { THEME } from 'global';

import { formatDateToString } from 'utils/datetime';
import { getCustomLocale } from 'utils/date-picker';

import { useTheme } from 'hooks/useTheme';

type DatePickerProps = {
  placeholder?: string;
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  name: string;
  value?: Date | null;
  readOnly?: boolean;
  minDate?: Date | null;
  maxDate?: Date | null;
  labelClassName?: string;
  classNameForLabelAndPicker?: string;
  disableWeekends?: boolean; // Disable Saturday and Sunday for stock trading
  onChange?(name: string, value: Date | null, extraDate?: Date | null): void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  rangeType?: 'FROM' | 'TO';
  btnClassName?: string;
};

const DayOption = [
  {
    label: 'common_number_days',
    value: 7,
  },
  {
    label: 'common_number_days',
    value: 14,
  },
  {
    label: 'common_number_days',
    value: 30,
  },
];

const DatePicker = (props: DatePickerProps) => {
  const { label, hasError, errorMessage, className, btnClassName } = props;
  const { t } = useTranslation();

  const { lng } = useParams();

  const customLocale: Locale = getCustomLocale(lng as string);
  const { theme } = useTheme();

  return (
    <Popover className={clsx(className, 'date-picker h-[4.4rem]', 'font-medium', { 'has-error': hasError })}>
      <div className="relative h-full w-full">
        <div
          className={clsx(
            props.classNameForLabelAndPicker ??
              'rounded-[1.6rem] relative flex flex-col gap-1 w-full p-2 border border-[var(--border-22)] bg-[var(--bg-36)] h-full light:shadow-base-1',
            btnClassName,
            { '!border-red-night': hasError },
          )}
        >
          <PopoverButton className="flex w-full h-full items-center justify-between text-base">
            <div className={clsx(props.labelClassName)}>
              {`${label ? t(label) : ''} ${props.value ? formatDateToString(props.value, 'dd/MM/yyyy') : (props.placeholder ?? '')}`}
            </div>
            <div>
              <CalendarIcon className="size-[2rem]" />
            </div>
          </PopoverButton>
          <PopoverPanel anchor="bottom" className="date-picker-panel z-[60] light:shadow-base-1 rounded-4">
            {({ close }) => (
              <div className="p-2 rounded-4 bg-[var(--bg-47)]">
                {props.rangeType && (
                  <div className="flex w-full gap-2 items-center mb-2">
                    {DayOption.map(item => (
                      <button
                        type="button"
                        onClick={() => {
                          if (props.rangeType === 'FROM') {
                            props.onChange?.(props.name, new Date(), addDays(new Date(), item.value));
                          } else {
                            props.onChange?.(props.name, addDays(new Date(), item.value), new Date());
                          }
                          close();
                        }}
                        className={clsx(
                          'flex-1 h-[4.4rem] rounded-[0.8rem] border border-night shadow-base-1 flex items-center justify-center',
                        )}
                        key={item.value}
                      >
                        {t(item.label, { days: item.value })}
                      </button>
                    ))}
                  </div>
                )}
                <Calendar
                  className="w-full"
                  scroll={{ enabled: true, monthHeight: 256, longMonthHeight: 295 }}
                  months={1}
                  color={theme === THEME.LIGHT ? '#C7E0FE' : '#55381D'}
                  onChange={date => {
                    props.onChange?.(props.name, date);
                    close();
                  }}
                  date={props.value!}
                  locale={customLocale}
                  direction="vertical"
                  showMonthArrow={false}
                  showDateDisplay
                  disabledDay={(date: Date) => {
                    // Check weekends for stock trading (Saturday = 6, Sunday = 0)
                    if (props.disableWeekends) {
                      const dayOfWeek = date.getDay();
                      if (dayOfWeek === 0 || dayOfWeek === 6) return true; // Sunday or Saturday
                    }

                    const dateNumber = Number(formatDateToString(date, 'yyyyMMdd'));
                    if (props.minDate) {
                      const minDateNumber = Number(formatDateToString(props.minDate, 'yyyyMMdd'));
                      if (dateNumber < minDateNumber) return true;
                    }
                    if (props.maxDate) {
                      const maxDateNumber = Number(formatDateToString(props.maxDate, 'yyyyMMdd'));
                      if (dateNumber > maxDateNumber) return true;
                    }
                    return false;
                  }}
                  showMonthAndYearPickers={false}
                  rangeColors={[theme === THEME.LIGHT ? '#C7E0FE' : '#55381D']}
                />
              </div>
            )}
          </PopoverPanel>
        </div>
      </div>
      {props.hasError && <div className="error-message">{errorMessage}</div>}
    </Popover>
  );
};

export default DatePicker;
