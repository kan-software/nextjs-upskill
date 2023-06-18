import Typography from '@mui/material/Typography';
import { ErrorContainer } from '@/lib/client/components/error/Error.styles';
import Link from '@/lib/client/components/shared/Link';

export default function Custom404() {
  return (
    <ErrorContainer>
      <Typography
        variant="h4"
        gutterBottom
      >
        404 - Page Not Found
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        The page does not exist
      </Typography>
      <Link href="/">Back to products</Link>
    </ErrorContainer>
  );
}
