import { PropsWithChildren, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export type ProductGridProps = PropsWithChildren<{
  image: ReactNode;
}>;

export function ProductGrid({ image, children }: ProductGridProps) {
  return (
    <Box
      my={3}
      mx={10}
    >
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          xs={6}
        >
          {image}
        </Grid>
        <Grid
          item
          xs={6}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
