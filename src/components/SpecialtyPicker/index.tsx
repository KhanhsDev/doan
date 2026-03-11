'use client';

import React, { useState } from 'react';
import { Eye, Baby, Bone, User, Brain, Syringe, Activity, HeartPulse, Stethoscope } from 'lucide-react';

import clsx from 'clsx';
import Dropdown from '@/elements/Dropdown';

import type { DropdownOption } from '@/elements/Dropdown';

interface SpecialtyPickerProps {
  selectedSpecialty?: string;
  onChange?: (specialty: string) => void;
  className?: string;
  label?: string;
  error?: string;
  variant?: 'grid' | 'dropdown';
}

const SPECIALTIES = [
  {
    value: 'cardiology',
    name: 'Tim mạch',
    nameEn: 'Cardiology',
    icon: HeartPulse,
    color: 'from-red-500 to-pink-500',
  },
  {
    value: 'pediatrics',
    name: 'Nhi khoa',
    nameEn: 'Pediatrics',
    icon: Baby,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    value: 'ophthalmology',
    name: 'Mắt',
    nameEn: 'Ophthalmology',
    icon: Eye,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    value: 'orthopedics',
    name: 'Xương khớp',
    nameEn: 'Orthopedics',
    icon: Bone,
    color: 'from-orange-500 to-amber-500',
  },
  {
    value: 'neurology',
    name: 'Thần kinh',
    nameEn: 'Neurology',
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
  },
  {
    value: 'internal',
    name: 'Nội khoa',
    nameEn: 'Internal Medicine',
    icon: Activity,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    value: 'general',
    name: 'Khám tổng quát',
    nameEn: 'General Practice',
    icon: Stethoscope,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    value: 'dermatology',
    name: 'Da liễu',
    nameEn: 'Dermatology',
    icon: User,
    color: 'from-pink-500 to-rose-500',
  },
  {
    value: 'vaccination',
    name: 'Tiêm chủng',
    nameEn: 'Vaccination',
    icon: Syringe,
    color: 'from-cyan-500 to-teal-500',
  },
];

const SpecialtyPicker = ({
  selectedSpecialty,
  onChange,
  className,
  label,
  error,
  variant = 'grid',
}: SpecialtyPickerProps) => {
  const [selected, setSelected] = useState<string | undefined>(selectedSpecialty);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  if (variant === 'dropdown') {
    const dropdownOptions: DropdownOption[] = SPECIALTIES.map(specialty => ({
      label: specialty.name,
      value: specialty.value,
    }));

    return (
      <div className={clsx('specialty-picker-dropdown', className)}>
        <Dropdown
          label={label}
          options={dropdownOptions}
          selected={selected}
          onChange={handleSelect}
          placeholder="Chọn chuyên khoa"
          hasError={!!error}
          errorMessage={error}
          hasSearch
        />
      </div>
    );
  }

  return (
    <div className={clsx('specialty-picker-grid', className)}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-4">{label}</label>}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-[2rem]">
        {SPECIALTIES.map(specialty => {
          const Icon = specialty.icon;
          const isSelected = selected === specialty.value;

          return (
            <button
              key={specialty.value}
              onClick={() => handleSelect(specialty.value)}
              className={clsx(
                'relative bg-white rounded-xl p-4 text-center transition-all duration-200',
                'hover:shadow-lg hover:-translate-y-1 cursor-pointer group',
                'border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                {
                  'border-blue-500 shadow-lg': isSelected,
                  'border-gray-200': !isSelected,
                },
              )}
            >
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              <div
                className={clsx(
                  'w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center text-white',
                  'bg-gradient-to-r transition-transform group-hover:scale-110',
                  specialty.color,
                )}
              >
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="font-semibold text-sm text-gray-900 mb-1">{specialty.name}</h3>
              <p className="text-xs text-gray-500">{specialty.nameEn}</p>
            </button>
          );
        })}
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SpecialtyPicker;
export { SPECIALTIES };
