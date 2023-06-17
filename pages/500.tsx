import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Custom500() {
  return (
    <Box
      mt={16}
      textAlign="center"
    >
      <h1>500 - Server-side error occurred</h1>
      <Box mt={2}>
        <Link href="/">
          <Button>Back to products</Button>
        </Link>
      </Box>
    </Box>
  );
}
