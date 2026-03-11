import { useRef } from 'react';

import * as yup from 'yup';
import { Formik } from 'formik';
import Field from '@/elements/Field';
import Button from '@/elements/Button';
import TextInput from '@/elements/TextInput';

import type { FormikProps } from 'formik';

import { isBlank } from '@/utils/commons';

import SpecialtyPicker from '../SpecialtyPicker';

interface BookNowValues {
  specialty: string;
  name?: string;
  phoneNumber?: string;
}
const BookNow = () => {
  const validationSchema = yup.object().shape({
    specialty: yup.string().required('Vui lòng chọn chuyên khoa'),
  });
  const initialValues: BookNowValues = {
    specialty: '',
    name: '',
    phoneNumber: '',
  };
  const formRef = useRef<FormikProps<any> | null>(null);
  const handleSubmit = (values: BookNowValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => handleSubmit(values)}
      innerRef={instance => {
        formRef.current = instance!;
      }}
      validationSchema={validationSchema}
      className="flex flex-col gap-4"
    >
      {({ values, touched, errors, setFieldValue, handleBlur, handleSubmit: formikHandleSubmit }) => (
        <form
          className="w-full"
          onSubmit={e => {
            e.preventDefault();
            formikHandleSubmit(e);
          }}
        >
          <SpecialtyPicker onChange={value => formRef.current?.setFieldValue('specialty', value)} />
          <div className="flex flex-row w-full gap-[1rem] items-start mt-[1rem] px-[1rem] mb-[1rem]">
            <Field
              hasError={touched.name && !isBlank(errors.name)}
              errorMessage={errors.name}
              className="!w-[70%] sm:!w-[65%]"
            >
              <TextInput
                labelPlacement="inside"
                value={values.name}
                labelClassName="pb-[0.8rem]"
                label="Nhập họ tên"
                name="name"
                className="w-full"
                inputClassName="!bg-[#FFFFFF] !rounded-[0.8rem] !p-[0.8rem]"
                placeholder="Nhập họ tên"
                onChange={e => {
                  setFieldValue('name', e.target.value);
                }}
                onBlur={e => {
                  handleBlur(e);
                }}
              />
            </Field>
            <Field
              hasError={touched.phoneNumber && !isBlank(errors.phoneNumber)}
              errorMessage={errors.phoneNumber}
              className="!w-[70%] sm:!w-[65%]"
            >
              <TextInput
                labelPlacement="inside"
                value={values.phoneNumber}
                labelClassName="pb-[0.8rem]"
                label="Nhập số điện thoại"
                name="phoneNumber"
                className="w-full"
                inputClassName="!bg-[#FFFFFF] !rounded-[0.8rem] !p-[0.8rem]"
                placeholder="Nhập số điện thoại"
                onChange={e => {
                  setFieldValue('phoneNumber', e.target.value);
                }}
                onBlur={e => {
                  handleBlur(e);
                }}
              />
            </Field>
          </div>{' '}
          <div className="px-[1rem] mb-[1rem]">
            <Button
              type="submit"
              className="!bg-[#FFFFFF] hover:!bg-[#4cc9f0] !text-blue-600 hover:!text-[#ffffff] !rounded-[0.8rem] !py-[0.8rem] w-full "
            >
              Đặt lịch
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default BookNow;
