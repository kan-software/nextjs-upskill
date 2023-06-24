import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ClientUser, useAuth } from '@/lib/client/utils/AuthProvider';

export type LoginData = {
  login: string;
  password: string;
};

export function useLogin() {
  const { setUser } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ login, password }: LoginData) => {
      const response = await axios.post<Omit<ClientUser, 'login'>>(
        '/api/user/login',
        {
          login,
          password,
        }
      );
      return { ...response.data, login };
    },
    onSuccess: (user) => {
      setUser(user);
      router.push('/profile');
    },
  });
}
