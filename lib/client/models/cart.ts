import { IProduct } from '@/lib/server/models/products';

export type CartProduct = {
  product: IProduct;
  quantity: number;
};
