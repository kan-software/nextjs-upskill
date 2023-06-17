import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Custom404() {
  return (
    <Box
      mt={16}
      textAlign="center"
    >
      <h1>404 - Page Not Found </h1>
      <h3>The page does not exist</h3>
      <Box mt={2}>
        <Link href="/">
          <Button>Back to products</Button>
        </Link>
      </Box>
    </Box>
  );
}
