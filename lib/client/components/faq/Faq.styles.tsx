import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { PropsWithChildren } from 'react';

export function FaqContainer({ children }: PropsWithChildren) {
  return (
    <Box
      my={4}
      mx={20}
    >
      {children}
    </Box>
  );
}

export function FaqItem({ children }: PropsWithChildren) {
  return (
    <Box my={3}>
      <Paper elevation={3}>
        <Box
          p={2}
          minHeight={150}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}
