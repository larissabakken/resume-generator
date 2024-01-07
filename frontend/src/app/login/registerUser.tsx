import { Button, Stack, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface IFormInputs {
  email: string;
  userName: string;
  password: string;
}

const RegisterUser = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    setError,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  useEffect(() => {
    setError('userName', {
      type: 'manual',
      message: 'Dont Forget Your Username Should Be Cool!',
    });
  }, [setError]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1}>
        <label>Email:</label>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              {...register('email', {
                required: true,
                pattern: {
                  value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  message: 'This is not a valid email',
                },
              })}
            />
          )}
          name="email"
          control={control}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label>Username:</label>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              {...register('userName', {
                minLength: {
                  value: 5,
                  message: 'This input must exceed 4 characters',
                },
                maxLength: {
                  value: 25,
                  message: 'This input can not exceed 24 characters',
                },
              })}
            />
          )}
          name="userName"
          control={control}
        />
        {errors.userName && <p>{errors.userName.message}</p>}
        <label>Password:</label>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              {...register('password', {
                minLength: 8,
                maxLength: 42,
                pattern: /^(?=.*[a-zA-Z])(?=.*\d)/, //1 letter and 1 number
              })}
            />
          )}
          name="password"
          control={control}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button variant="contained" size="large" type="submit">
          Create user
        </Button>
      </Stack>
    </form>
  );
};

export default RegisterUser;
