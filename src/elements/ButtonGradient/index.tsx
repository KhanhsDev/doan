'use client';

import './style.scss';

import clsx from 'clsx';

interface ButtonGradientProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  childrenClassName?: string;
  disabled?: boolean;
  buttonClassName?: string;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'outline' | 'filled';
}

const ButtonGradient = ({
  children,
  className,
  childrenClassName,
  onClick,
  disabled,
  buttonClassName,
  active = true,
  type = 'button',
  variant = 'outline',
  ...props
}: ButtonGradientProps) => (
  <button
    onClick={onClick}
    type={type}
    disabled={disabled}
    {...props}
    className={clsx('p-[0.1rem] relative overflow-hidden rounded-[0.8rem]  light:bg-white', className, {
      'button-gradient-outline': variant === 'outline',
      'button-gradient-filled': variant === 'filled',
      'is-active': active,
      'is-disabled': disabled,
    })}
  >
    <div className={clsx(buttonClassName)}>
      <span className={clsx(childrenClassName)} data-name="childrenClassName">
        {children}
      </span>
    </div>
  </button>
);

export default ButtonGradient;
