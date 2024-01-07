import { Button, Stack, TextField } from '@mui/material';

const RegisterUser = () => {
  return (
    <Stack>
      <p>Email</p>
      <TextField id="email-register-input" variant="outlined" />
      <p>Password</p>
      <TextField id="password-register-input" variant="outlined" />
      <p>Username</p>
      <TextField id="username-register-input" variant="outlined" />
      <Button variant="contained" size="large" sx={{ marginTop: 4 }}>
        Login
      </Button>
    </Stack>
  );
};

export default RegisterUser;
