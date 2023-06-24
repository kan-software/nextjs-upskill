import { FormEventHandler } from 'react';
import { AxiosError } from 'axios';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  FormField,
  LoginForm,
} from '@/lib/client/components/login/Login.styles';
import { useLogin } from '@/lib/client/mutations/user';
import { LoginData } from '@/lib/client/models/user';

export default function Login() {
  const loginMutation = useLogin();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const loginData = getLoginData(e.target as HTMLFormElement);
    loginMutation.mutate(loginData);
  };

  const getLoginData = (formElement: HTMLFormElement): LoginData => {
    const data = new FormData(formElement);
    const login = data.get('login') as string;
    const password = data.get('password') as string;
    return { login, password };
  };

  const getErrorMessage = (error: unknown) => {
    if (error instanceof AxiosError) {
      return error.response?.data.message;
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      {loginMutation.isError && (
        <Typography
          textAlign="center"
          color="error"
          gutterBottom
        >
          {getErrorMessage(loginMutation.error) || 'Something went wrong!'}
        </Typography>
      )}
      <Typography
        textAlign="center"
        variant="h4"
        gutterBottom
      >
        Sign in
      </Typography>
      <FormField>
        <TextField
          required
          name="login"
          label="Login"
          fullWidth
        />
      </FormField>
      <FormField>
        <TextField
          required
          type="password"
          name="password"
          label="Password"
          fullWidth
        />
      </FormField>
      <Button
        fullWidth
        type="submit"
        size="large"
        variant="contained"
      >
        Sign in
      </Button>
    </LoginForm>
  );
}
