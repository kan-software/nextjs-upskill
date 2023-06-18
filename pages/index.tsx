import type { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { ProductsItem } from '@/lib/client/components/products/ProductsItem';
import {
  PaginationContainer,
  ProductsGrid,
  ProductsGridItem,
} from '@/lib/client/components/products/Products.styles';
import { ProductsPagination } from '@/lib/client/components/products/ProductsPagination';
import productsService from '@/lib/server/services/products';
import { productsKeys, useProducts } from '@/lib/client/queries/products';

export type ProductsProps = {
  page: number;
};

export const getServerSideProps: GetServerSideProps<ProductsProps> = async ({
  query,
}) => {
  try {
    const queryClient = new QueryClient();
    const page = query.page ? +query.page : 1;
    const data = productsService.getProducts(page);
    queryClient.setQueryData(productsKeys.all, data);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        page,
      },
    };
  } catch (e) {
    if (e instanceof Error && e.message === 'Products not found') {
      return { notFound: true };
    }
    throw e;
  }
};

export default function Products({ page }: ProductsProps) {
  const { data } = useProducts({ page });

  const {
    products,
    meta: { totalPages },
  } = data!;

  return (
    <>
      <PaginationContainer>
        <ProductsPagination
          totalPages={totalPages}
          page={page}
        />
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
