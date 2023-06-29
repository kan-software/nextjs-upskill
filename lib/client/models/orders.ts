import { IOrderItem } from '@/lib/server/models/orders';

export type OrderData = {
  userId: number;
  items: IOrderItem[];
};
