import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  ProductAddToBasketContainer,
  ProductGrid,
} from '@/lib/client/components/products/Product.styles';
import productsService from '@/lib/server/services/products';
import Link from '@/lib/client/components/shared/Link';
import { productsKeys, useProduct } from '@/lib/client/queries/products';
import { AddProductToBasket } from '@/lib/client/components/products/AddProductToBasket';

export type ProductProps = {
  id: number;
};

export const getServerSideProps: GetServerSideProps<ProductProps> = async ({
  query,
}) => {
  try {
    const queryClient = new QueryClient();
    const id = +(query.id as string);
    const product = productsService.getSingleProduct(id);
    queryClient.setQueryData(productsKeys.single(id), product);
    return { props: { dehydratedState: dehydrate(queryClient), id } };
  } catch (e) {
    if (e instanceof Error && e.message === 'Product not found') {
      return { notFound: true };
    }
    throw e;
  }
};

export default function Product({ id }: ProductProps) {
  const { data } = useProduct({ id });
  const product = data!;

  return (
    <ProductGrid
      image={
        <Image
          priority
          src={product.image}
          width={700}
          height={700}
          alt={product.title}
          style={{ objectFit: 'contain' }}
        />
      }
    >
      <Button
        component={Link}
        href="/"
      >
        Back to products
      </Button>
      <Typography
        mt={5}
        variant="h5"
        textAlign="center"
      >
        {product.title}
      </Typography>
      <Typography
        mt={5}
        variant="h6"
        textAlign="center"
      >
        Price: {product.price}
      </Typography>
      <Typography mt={5}>{product.description}</Typography>
      <ProductAddToBasketContainer>
        <AddProductToBasket product={product} />
      </ProductAddToBasketContainer>
    </ProductGrid>
  );
}
