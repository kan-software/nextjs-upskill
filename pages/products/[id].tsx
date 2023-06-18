import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductsQuantitySelect } from '@/lib/client/components/shared/ProductsQuantitySelect';
import {
  ProductAddToBasketContainer,
  ProductGrid,
} from '@/lib/client/components/products/Product.styles';
import productsService from '@/lib/server/services/products';
import Link from '@/lib/client/components/shared/Link';

export type ProductProps = {
  product: ReturnType<typeof productsService.getSingleProduct>;
};

export const getServerSideProps: GetServerSideProps<ProductProps> = async ({
  query,
}) => {
  try {
    const id = query.id as string;
    const product = productsService.getSingleProduct(+id);
    return { props: { product } };
  } catch (e) {
    if (e instanceof Error && e.message === 'Product not found') {
      return { notFound: true };
    }
    throw e;
  }
};

export default function Product({ product }: ProductProps) {
  const handleAddToBasket = () => {
    // TODO: implement add to basket
  };

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
      <Typography textAlign="center">
        {product.stock > 0 ? 'In stock' : 'Out of stock'}
      </Typography>
      <Typography mt={5}>{product.description}</Typography>
      {product.stock > 0 && (
        <ProductAddToBasketContainer>
          <ProductsQuantitySelect stock={product.stock} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToBasket}
          >
            Add to basket
          </Button>
        </ProductAddToBasketContainer>
      )}
    </ProductGrid>
  );
}
