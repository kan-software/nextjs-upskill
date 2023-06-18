import Typography from '@mui/material/Typography';
import { ErrorContainer } from '@/lib/client/components/error/Error.styles';
import Link from '@/lib/client/components/shared/Link';

export default function Custom500() {
  return (
    <ErrorContainer>
      <Typography
        variant="h4"
        gutterBottom
      >
        500 - Server-side error occurred
      </Typography>
      <Link href="/">Back to products</Link>
    </ErrorContainer>
  );
}
