import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/client/utils/AuthProvider';
import { login, logout, updateCart } from '../api/user';
import { userKeys } from '../queries/user';

export function useLogin() {
  const { setUser } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      setUser(user);
      const returnTo =
        typeof router.query.returnTo === 'string'
          ? router.query.returnTo
          : '/profile';
      router.push({
        pathname: returnTo,
      });
    },
  });
}

export function useLogout() {
  const { resetUser } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      resetUser();
      router.push('/login');
    },
  });
}

export function useUpdateCart() {
  const queryClient = useQueryClient();
  const { getUser } = useAuth();
  const user = getUser();

  return useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.userCart(user!.userId));
    },
  });
}
