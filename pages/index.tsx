import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { IProduct } from '@/lib/server/models/products';
import { productsData } from '@/lib/server/data/products';
import { ProductsItem } from '@/lib/client/components/products/ProductsItem';
import {
  PaginationContainer,
  ProductsGrid,
  ProductsGridItem,
} from '@/lib/client/components/products/Products.styles';
import { ProductsPagination } from '@/lib/client/components/products/ProductsPagination';

const mockedProducts: IProduct[] = productsData.slice(0, 5);

export const getServerSideProps: GetServerSideProps<{
  products: IProduct[];
}> = async () => {
  // TODO: implement real data fetching
  return {
    props: {
      products: mockedProducts,
    },
  };
};

export default function Products({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <PaginationContainer>
        <ProductsPagination />
      </PaginationContainer>
      <ProductsGrid>
        {products.map((product) => (
          <ProductsGridItem key={product.productId}>
            <ProductsItem product={product} />
          </ProductsGridItem>
        ))}
      </ProductsGrid>
    </>
  );
}
