import type { GetServerSideProps } from 'next';
import { ProductsItem } from '@/lib/client/components/products/ProductsItem';
import {
  PaginationContainer,
  ProductsGrid,
  ProductsGridItem,
} from '@/lib/client/components/products/Products.styles';
import { ProductsPagination } from '@/lib/client/components/products/ProductsPagination';
import productsService from '@/lib/server/services/products';

export type ProductsProps = {
  data: ReturnType<typeof productsService.getProducts>;
};

export const getServerSideProps: GetServerSideProps<ProductsProps> = async ({
  query,
}) => {
  try {
    const page = query.page ? +query.page : 1;
    const data = productsService.getProducts(page);
    return { props: { data } };
  } catch (e) {
    if (e instanceof Error && e.message === 'Products not found') {
      return { notFound: true };
    }
    throw e;
  }
};

export default function Products({ data }: ProductsProps) {
  const {
    products,
    meta: { totalPages, page },
  } = data;

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
