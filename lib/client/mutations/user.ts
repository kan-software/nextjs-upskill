import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/client/utils/AuthProvider';
import { login, logout } from '../api/user';

export function useLogin() {
  const { setUser } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      setUser(user);
      router.push('/profile');
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
