import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductsQuantitySelect } from '@/lib/client/components/shared/ProductsQuantitySelect';
import { ProductGrid } from '@/lib/client/components/product/Product.styles';
import productsService from '@/lib/server/services/products';

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
      <Link href="/">
        <Button>Back to products</Button>
      </Link>
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
        <Box
          mt={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ProductsQuantitySelect stock={product.stock} />
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToBasket}
            >
              Add to basket
            </Button>
          </Box>
        </Box>
      )}
    </ProductGrid>
  );
}
