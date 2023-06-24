import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  FormField,
  SignInForm,
} from '@/lib/client/components/login/SignIn.styles';

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: implement auth
  };

  return (
    <SignInForm onSubmit={handleSubmit}>
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
          name="email"
          label="Email"
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
    </SignInForm>
  );
}
