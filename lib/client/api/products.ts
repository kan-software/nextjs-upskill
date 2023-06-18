import axios from 'axios';
import productsService from '@/lib/server/services/products';
import { IProduct } from '@/lib/server/models/products';

const apiPath = '/api/products';

export async function getProducts(page: number) {
  const response = await axios.get<
    ReturnType<typeof productsService.getProducts>
  >(apiPath, { params: { page } });
  return response.data;
}

export async function getProduct(id: number) {
  const response = await axios.get<IProduct>(`${apiPath}/${id}`);
  return response.data;
}
