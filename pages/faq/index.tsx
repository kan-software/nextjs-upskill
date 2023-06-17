import { GetStaticProps } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import faqService from '@/lib/server/services/faq';

export type FaqProps = {
  faqItems: ReturnType<typeof faqService.getFaqList>;
};

export const getStaticProps: GetStaticProps<FaqProps> = async () => {
  const faqItems = faqService.getFaqList();
  return {
    props: {
      faqItems,
    },
  };
};

export default function Faq({ faqItems }: FaqProps) {
  return (
    <Box
      my={4}
      mx={20}
    >
      {faqItems.map((faqItem) => (
        <Box
          key={faqItem.faqId}
          my={3}
        >
          <Paper elevation={3}>
            <Box
              p={2}
              minHeight={150}
            >
              <Typography
                variant="h5"
                gutterBottom
              >
                {faqItem.question}
              </Typography>
              <Typography>{faqItem.answer}</Typography>
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
}
