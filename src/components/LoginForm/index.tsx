'use client';

import React, { useRef, useState } from 'react';

import clsx from 'clsx';
import * as yup from 'yup';
import { Formik } from 'formik';
import TextInput from '@/elements/TextInput';
import PasswordInput from '@/elements/PasswordInput';

import type { FormikProps } from 'formik';

import { uuid, isBlank } from '@/utils/commons';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const componentId = useRef<string>(uuid());

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = React.useState<{
    title: string;
    message: string;
  } | null>(null);
  const formRef = useRef<FormikProps<LoginFormValues> | null>(null);
  const initialValues = useRef<LoginFormValues>({
    username: '',
    password: '',
  });

  const getSchema = () =>
    yup.object().shape({
      username: yup
        .string()
        .label('Số điện thoại hoặc email')
        .required('Số điện thoại hoặc email là bắt buộc'),
      password: yup.string().label('Mật khẩu').required('Mật khẩu là bắt buộc'),
    });
  const handleOpenAccount = () => {
    alert('Chức năng mở tài khoản đang được phát triển.');
  };
  const handleForgotPassword = () => {
    alert('Chức năng quên mật khẩu đang được phát triển.');
  };
  const onSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    setSuccessMessage(null);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage({
        title: 'Đăng nhập thành công',
        message: 'Chào mừng bạn đã quay trở lại!',
      });
      formRef.current?.resetForm();
    }, 2000);
  };
  const errorTest = yup.object().shape({
    username: yup.string().label('Số điện thoại hoặc email').required('Số điện thoại hoặc email là bắt buộc'),
    password: yup.string().label('Mật khẩu').required('Mật khẩu là bắt buộc'),
  });
  return (
    <div className="bg-[#CCCCCC] p-[4rem] rounded-[0.8rem]">
      {/* <Loader
        loading={loading}
        id={componentId.current}
        className="rounded-[0.8rem] flex-1 px-[1.6rem] flex flex-col relative z-50"
      > */}
      <Formik<LoginFormValues>
        onSubmit={onSubmit}
        innerRef={instance => {
          formRef.current = instance!;
        }}
        initialValues={initialValues.current}
        validationSchema={getSchema()}
        validateOnMount
        validateOnChange
      >
        {({ values, touched, errors, setFieldValue, handleSubmit, handleBlur, handleChange, isValid }) => (
          <>
            <form
              onSubmit={event => {
                handleSubmit(event);
              }}
              className="login-form"
            >
              <div className="flex flex-col gap-[0.8rem]">
                <TextInput
                  className="login-input"
                  placeholder="Số điện thoại hoặc email"
                  label="Số điện thoại hoặc email"
                  name="username"
                  value={values.username}
                  labelPlacement="inside"
                  onChange={handleChange}
                  autoFocus
                  clearable
                  onClear={() => {
                    setFieldValue('username', '');
                  }}
                  hasError={touched.username && !isBlank(errors.username)}
                  onBlur={handleBlur}
                  inputClassName="!border-[#ffffff]"
                  inputElementClassName="text-[#484848]"
                />
                <PasswordInput
                  className="login-input"
                  placeholder="Mật khẩu"
                  inputClassName="!border-[#ffffff]"
                  label="Mật khẩu"
                  type="password"
                  name="password"
                  value={values.password}
                  labelPlacement="inside"
                  onChange={handleChange}
                  hasError={touched.password && !isBlank(errors.password)}
                  onBlur={handleBlur}
                  visibleTextClassName="text-[#484848]"
                />
                <button
                  className={clsx(
                    'text-[2rem] text-[var(--text-3)] font-medium leading-[2.4rem] rounded-[0.8rem] border border-[var(--border-10)] py-[1.2rem] text-center w-full mt-[8px]',
                    {
                      'dark:!bg-[--bg-disabled] light:!bg-[var(--bg-disabled-night)] light:shadow-[1px_2px_8px_0_rgba(3,49,75,0.16)] !text-[--text-disabled]':
                        !isValid,
                      'bg-primary-gradient light:bg-[var(--blue)] light:bg-none': isValid,
                    },
                  )}
                  disabled={!isValid}
                >
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="w-full flex mt-[1.6rem] flex-row gap-[0.8rem]">
              <span className="text-[1.6rem] font-500 text-[--text-2] leading-[2rem]">
                Bạn chưa có tài khoản?{' '}
              </span>
              <div
                className="text-[1.6rem] font-500 text-[--teal] cursor-pointer leading-[2rem] underline"
                onClick={handleOpenAccount}
              >
                Mở tài khoản
              </div>
              <div
                className="text-[1.6rem] font-500 text-[--teal] cursor-pointer leading-[2rem] underline ml-auto"
                onClick={() => handleForgotPassword()}
              >
                Quên mật khẩu
              </div>
            </div>
          </>
        )}
      </Formik>
      {/* </Loader> */}
    </div>
  );
};

export default LoginForm;
