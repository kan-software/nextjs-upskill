import axios from 'axios';
import { ICartItem } from '@/lib/server/models/carts';
import { ClientUser, LoginData } from '../models/user';
import { UpdateCart } from '../models/cart';

const apiPath = '/api/user';

export async function login(data: LoginData) {
  const response = await axios.post<Omit<ClientUser, 'login'>>(
    `${apiPath}/login`,
    data
  );
  return { ...response.data, login: data.login };
}

export async function logout(userId: ClientUser['userId']) {
  return axios.get(`${apiPath}/logout`, { params: { userId } });
}

export async function getCart(userId: ClientUser['userId']) {
  const response = await axios.get<ICartItem[]>(`${apiPath}/cart`, {
    params: { userId },
  });
  return response.data;
}

export async function updateCart(data: UpdateCart) {
  return axios.post(`${apiPath}/cart`, data);
}

export async function removeCart(userId: ClientUser['userId']) {
  return axios.delete(`${apiPath}/cart`, { params: { userId } });
}
