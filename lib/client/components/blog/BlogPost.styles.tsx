import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

export function BlogPostContainer({ children }: PropsWithChildren) {
  return (
    <Box
      my={8}
      mx={20}
    >
      {children}
    </Box>
  );
}
