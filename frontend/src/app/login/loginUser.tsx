import { Stack, TextField, Button } from '@mui/material';

const LoginUser = () => {
  return (
    <Stack>
      <p>Email</p>
      <TextField id="email-input" variant="outlined" />
      <p>Password</p>
      <TextField id="password-input" variant="outlined" />
      <Button variant="contained" size="large" sx={{ marginTop: 4 }}>
        Login
      </Button>
    </Stack>
  );
};

export default LoginUser;
