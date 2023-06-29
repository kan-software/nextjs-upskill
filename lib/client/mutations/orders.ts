import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder } from '../api/orders';
import { productsKeys } from '../queries/products';
import { useRemoveCart } from './user';

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const removeCartMutation = useRemoveCart();

  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      removeCartMutation.mutate();
      queryClient.invalidateQueries(productsKeys.all);
    },
  });
}
