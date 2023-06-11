import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

export function PaginationContainer({ children }: PropsWithChildren) {
  return (
    <Box
      m={3}
      display="flex"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}

export function ProductsGrid({ children }: PropsWithChildren) {
  return (
    <Box m={3}>
      <Grid
        container
        spacing={4}
      >
        {children}
      </Grid>
    </Box>
  );
}

export function ProductsGridItem({ children }: PropsWithChildren) {
  return (
    <Grid
      item
      xs={3}
    >
      {children}
    </Grid>
  );
}
