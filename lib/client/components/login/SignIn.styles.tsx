import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

export type SignInFormProps = PropsWithChildren<{
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}>;

export function SignInForm({ children, onSubmit }: SignInFormProps) {
  return (
    <Box
      maxWidth={300}
      mx="auto"
      mt={8}
      component="form"
      onSubmit={onSubmit}
      noValidate
    >
      {children}
    </Box>
  );
}

export function FormField({ children }: PropsWithChildren) {
  return <Box my={2}>{children}</Box>;
}
