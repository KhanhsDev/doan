'use client';

import React from 'react';

import { useModalLogin } from '@/hooks/auth/useModalLogin';

import LoginForm from '@/components/LoginForm';
import ModalProvider from '@/components/ModalProvider';
// import ForgetPasswordForm from 'components/ForgetPasswordForm';

type Props = {};

const LoginModal = (props: Props) => {
  const { show, handleHide } = useModalLogin();
  return (
    <ModalProvider
      show={show}
      onClose={handleHide}
      dialogClass="!bg-gradient-to-r transition-transform from-blue-500 to-cyan-500"
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
