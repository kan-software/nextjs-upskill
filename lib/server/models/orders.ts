export interface IOrderItem {
    productId: number;
    quantity: number;
    price: number;
}

export interface IOrder {
    orderId: number;
    userId: number;
    date: string;
    items: IOrderItem[];
}

export interface IOrderService {
    getOrders(userId: number): IOrder[];
    createOrder(userId: number, items: IOrderItem[]): void;
}