import { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';

export function ErrorContainer({ children }: PropsWithChildren) {
  return (
    <Box
      mt={16}
      textAlign="center"
    >
      {children}
    </Box>
  );
}
