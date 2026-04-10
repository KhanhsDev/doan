import type { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: ReactNode;
  className?: string;
  size?: 'sx' | 'sm' | 'md' | 'lg';
  color?: 'success' | 'waring' | 'primary' | 'default' | 'error';
  variant?: 'border' | 'solid' | 'faded';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
}
export interface RestError {
  status?: RestError;
  code?: string;
  message?: string;
  messageParams?: Record<string, unknown>;
}
export type RestResponse<T = Record<string, unknown>> = RestError & T;
export interface NotificationConfig<T = any> {
  title?: string;
  titleError?: string;
  titleSuccess?: string;
  containerId?: string;
  ignoreSuccess?: boolean;
  ignoreError?: boolean;
  ignoreCount?: boolean;
  type?: 'TOAST' | 'MODAL';
  content?: string;
  color?: 'success' | 'error' | 'warning';
  errorMessage?: string;
  getSuccessNoti?: (data: T) => { type: 'success' | 'error' | 'warning'; content: string; title: string };
}
