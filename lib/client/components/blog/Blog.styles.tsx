import { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '../shared/Link';

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

export function BlogGridItem({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  return (
    <Grid
      item
      xs={6}
      component={Link}
      href={href}
      noLinkStyle
    >
      {children}
    </Grid>
  );
}

export function BlogPostItem({ children }: PropsWithChildren) {
  return (
    <Paper elevation={3}>
      <Box
        py={1}
        px={2}
        minHeight={150}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {children}
      </Box>
    </Paper>
  );
}
