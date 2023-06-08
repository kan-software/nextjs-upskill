export interface IProduct {
    productId: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    stock: number;
}

export interface IProductResponse {
    meta: {
        page: number;
        perPage: number;
        totalPages: number;
    },
    products: IProduct[];
}

export interface IProductService {
    getProducts(page: number): IProductResponse;
    getSingleProduct(productId: number): IProduct;
    checkStock(productId: number, quantity: number): boolean;
    setStock(productId: number, quantity: number): void;
}