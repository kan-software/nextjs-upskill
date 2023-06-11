import { PropsWithChildren, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export type ProductGridProps = PropsWithChildren<{
  image: ReactNode;
}>;

export function ProductGrid({ image, children }: ProductGridProps) {
  return (
    <Box m={3}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          xs={1}
        />
        <Grid
          item
          xs={5}
        >
          {image}
        </Grid>
        <Grid
          item
          xs={5}
        >
          {children}
        </Grid>
        <Grid
          item
          xs={1}
        />
      </Grid>
    </Box>
  );
}
