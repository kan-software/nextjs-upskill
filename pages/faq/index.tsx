import { GetStaticProps } from 'next';
import Typography from '@mui/material/Typography';
import faqService from '@/lib/server/services/faq';
import { FaqContainer, FaqItem } from '@/lib/client/components/faq/Faq.styles';

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
    <FaqContainer>
      {faqItems.map((faqItem) => (
        <FaqItem key={faqItem.faqId}>
          <Typography
            variant="h5"
            gutterBottom
          >
            {faqItem.question}
          </Typography>
          <Typography>{faqItem.answer}</Typography>
        </FaqItem>
      ))}
    </FaqContainer>
  );
}
