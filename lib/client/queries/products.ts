import { useQueries, useQuery } from '@tanstack/react-query';
import { getProduct, getProducts } from '../api/products';

export const productsKeys = {
  all: ['products'] as const,
  single: (id: number) => [...productsKeys.all, id] as const,
};

export function useProducts({ page }: { page: number }) {
  return useQuery({
    queryKey: productsKeys.all,
    queryFn: () => getProducts(page),
  });
}

export function useProduct({ id }: { id: number }) {
  return useQuery({
    queryKey: productsKeys.single(id),
    queryFn: () => getProduct(id),
  });
}

export function useSelectedProducts(productIds: number[]) {
  return useQueries({
    queries: productIds.map((productId) => ({
      queryKey: productsKeys.single(productId),
      queryFn: () => getProduct(productId),
    })),
  });
}
