import { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';

export function ProfileContainer({ children }: PropsWithChildren) {
  return (
    <Box
      maxWidth={300}
      mx="auto"
      mt={8}
      textAlign="center"
    >
      {children}
    </Box>
  );
}

export function UserDataContainer({ children }: PropsWithChildren) {
  return <Box my={3}>{children}</Box>;
}
