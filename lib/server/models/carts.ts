export interface ICartItem {
    productId: number;
    quantity: number
}

export interface ICart {
    userId: number;
    items: ICartItem[];
}

export interface ICartService {
    getCart(userId: number): ICartItem[];
    updateCart(userId: number, cartItems: ICartItem[]): void;
    clearCart(userId: number): void;
}