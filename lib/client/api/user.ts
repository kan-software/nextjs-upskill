import axios from 'axios';
import { ClientUser, LoginData } from '../models/user';

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
