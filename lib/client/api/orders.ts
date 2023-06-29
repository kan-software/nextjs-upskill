import axios from 'axios';
import { OrderData } from '../models/orders';

const apiPath = '/api/orders';

export async function createOrder(data: OrderData) {
  return axios.post(apiPath, data);
}
