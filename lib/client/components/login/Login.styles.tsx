import Box from '@mui/material/Box';
import { FormEventHandler, PropsWithChildren } from 'react';

export type LoginFormProps = PropsWithChildren<{
  onSubmit: FormEventHandler<HTMLFormElement>;
}>;

export function LoginForm({ children, onSubmit }: LoginFormProps) {
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
