import React from 'react';
import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import clsx from 'clsx';
import { FormInputArg } from './Type/form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputArg>();

  const onSubmit: SubmitHandler<FormInputArg> = (data) => {
    // On Finish
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="h-fit p-5 bg-gray-200 w-[400px]">
        <p className="text-center font-semibold rounded">My Form</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              className={clsx(
                'block w-full h-[30px]',
                errors.nama && 'border-2 border-solid border-red-500',
              )}
              placeholder="Nama"
              {...register('nama', { required: true })}
            />
            {errors.nama?.type === 'required' && (
              <p className="m-0 text-red-300">Silahkan isi Nama</p>
            )}
          </div>
          <div className="mb-5">
            <input
              className={clsx(
                'block w-full h-[30px]',
                errors.nama && 'border border-solid border-red-500',
              )}
              placeholder="Email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Format email tidak sesuai',
                },
              })}
            />
            {errors.email?.type === 'required' && (
              <p className="m-0 text-red-300">Silahkan isi Email</p>
            )}
            {errors.email?.type === 'pattern' && (
              <p className="m-0 text-red-300">{errors?.email?.message}</p>
            )}
          </div>
          <div className="mb-5">
            <input
              type="password"
              className={clsx(
                'block w-full h-[30px]',
                errors.password && 'border border-solid border-red-500',
              )}
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password?.type === 'required' && (
              <p className="m-0 text-red-300">Silahkan isi Password</p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
