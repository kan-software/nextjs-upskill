import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../utils/AuthProvider';
import { getCart } from '../api/user';

export const userKeys = {
  cart: ['cart'],
  userCart: (userId: number) => [...userKeys.cart, userId] as const,
};

export function useCartItems() {
  const { getUser, isLoggedIn } = useAuth();
  const user = getUser();
  return useQuery({
    queryKey: user ? userKeys.userCart(user.userId) : userKeys.cart,
    queryFn: () => getCart(user!.userId),
    enabled: isLoggedIn(),
    retry: 0,
  });
}
