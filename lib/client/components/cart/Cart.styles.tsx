import { PropsWithChildren, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export function CartContainer({ children }: PropsWithChildren) {
  return <Box m={3}>{children}</Box>;
}

export type CartGridProps = PropsWithChildren<{
  summary: ReactNode;
}>;

export function CartGrid({ children, summary }: CartGridProps) {
  return (
    <Grid
      container
      spacing={4}
      mt={1}
    >
      <Grid
        item
        xs={7}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={5}
      >
        {summary}
      </Grid>
    </Grid>
  );
}

export function CartSummaryContainer({ children }: PropsWithChildren) {
  return (
    <Paper elevation={3}>
      <Box p={2}>{children}</Box>
    </Paper>
  );
}

export type CartProductContainerProps = PropsWithChildren<{
  image: ReactNode;
}>;

export function CartProductContainer({
  image,
  children,
}: CartProductContainerProps) {
  return (
    <Box mb={2}>
      <Paper elevation={3}>
        <Box
          p={1}
          minHeight={150}
          display="flex"
          justifyContent="space-between"
        >
          {image}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          >
            {children}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export function ProductsQuantityContainer({ children }: PropsWithChildren) {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      {children}
    </Box>
  );
}
