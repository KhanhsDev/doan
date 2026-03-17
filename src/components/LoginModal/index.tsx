'use client';

import React from 'react';

import { useModalLogin } from '@/hooks/auth/useModalLogin';

import LoginForm from '@/components/LoginForm';
import ModalProvider from '@/components/ModalProvider';
// import ForgetPasswordForm from 'components/ForgetPasswordForm';

type Props = {};

const LoginModal = (props: Props) => {
  const { show, handleHide } = useModalLogin();
  console.log('show login modal', show);
  return (
    <ModalProvider
      show={show}
      onClose={handleHide}
      dialogClass="!border-[--border-16] light:shadow-[1px_2px_8px_0_rgba(3,49,75,0.16)]"
    >
      <div className="h-full flex flex-row text-[--text-color-1]">
        <div className="rounded-[0.8rem] flex-1 px-[1.6rem] flex flex-col">
          <LoginForm />
        </div>
      </div>
    </ModalProvider>
  );
};

export default LoginModal;
