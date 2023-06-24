import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { User, useAuth } from '@/lib/client/utils/AuthProvider';
import { useRouter } from 'next/router';

export type LoginData = {
  login: string;
  password: string;
};

export function useLogin() {
  const { setUser } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ login, password }: LoginData) => {
      const response = await axios.post<User>('/api/user/login', {
        login,
        password,
      });
      return response.data;
    },
    onSuccess: (user) => {
      setUser(user);
      router.push('/profile');
    },
  });
}
