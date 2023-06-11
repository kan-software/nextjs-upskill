import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProduct } from '@/lib/server/models/products';
import { productsData } from '@/lib/server/data/products';
import { ProductsQuantitySelect } from '@/lib/client/components/shared/ProductsQuantitySelect';
import { ProductGrid } from '@/lib/client/components/product/Product.styles';

export const getServerSideProps: GetServerSideProps<{
  product: IProduct;
}> = async () => {
  // TODO: implement real data fetching
  return {
    props: {
      product: productsData[0],
    },
  };
};

export default function Product({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
