import { Button, Stack, TextField } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

const userSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .refine((data) => /\d/.test(data), {
      message: 'The password must include at least one number',
    }),
  userName: z.string().min(5).max(25),
});

interface IFormInputs {
  email: string;
  password: string;
  userName?: string;
}

const LoginUser = ({ newUser }: { newUser: boolean }) => {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    setValue('email', '');
    setValue('password', '');
    if (newUser) {
      setValue('userName', '');
    }
  }, [newUser, setValue]);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    try {
      const validatedData = userSchema.parse(data);
      console.log('Validated User Data:', validatedData);
    } catch (error) {
      console.error('Validation Error:', (error as Error).message);
    }
  };

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
              })}
            />
          )}
          name="email"
          control={control}
        />
        {errors.email && (
          <p className="error-validation">{errors.email.message}</p>
        )}
        <label>Password:</label>
        <Controller
          render={({ field }) => (
            <TextField {...field} {...register('password')} />
          )}
          name="password"
          control={control}
        />
        {errors.password && (
          <p className="error-validation">{errors.password.message}</p>
        )}
        {newUser && (
          <>
            <label>Username:</label>
            <Controller
              render={({ field }) => (
                <TextField {...field} {...register('userName')} />
              )}
              name="userName"
              control={control}
            />
            {errors.userName && (
              <p className="error-validation">{errors.userName.message}</p>
            )}
          </>
        )}

        <Button variant="contained" size="large" type="submit">
          {newUser ? 'Create User' : 'Login'}
        </Button>
      </Stack>
    </form>
  );
};

export default LoginUser;
