import { ICartItem } from '@/lib/server/models/carts';
import { IProduct } from '@/lib/server/models/products';

export type CartProduct = {
  product: IProduct;
  quantity: number;
};

export type UpdateCart = {
  userId: number;
  cart: ICartItem[];
};
