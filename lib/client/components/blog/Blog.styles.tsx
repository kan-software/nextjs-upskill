import { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export function BlogGrid({ children }: PropsWithChildren) {
  return (
    <Box
      my={3}
      mx={25}
    >
      <Grid
        container
        spacing={4}
      >
        {children}
      </Grid>
    </Box>
  );
}

export function BlogGridItem({ children }: PropsWithChildren) {
  return (
    <Grid
      item
      xs={6}
    >
      {children}
    </Grid>
  );
}
