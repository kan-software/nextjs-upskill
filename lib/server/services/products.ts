import { IProduct } from '@/lib/server/models/products';
import { productsData } from '@/lib/server/data/products';
import {IGlobalInstance, initializeService} from "@/lib/server/utils/initializeService";

export class ProductsService {
    constructor(private products: IProduct[]) {}

    getProducts(page: number) {
        const perPage = 9
        const products = this.products.slice((page - 1) * perPage, page * perPage);
        const totalPages = Math.ceil(this.products.length / perPage);

        if(!products.length) {throw new Error('Products not found')}

        return {
            meta: {
                page,
                perPage,
                totalPages
            },
            products
        }
    }

    getSingleProduct(productId: number) {
        const product = this.products.find(product => product.productId === productId);

        if(!product) {throw new Error('Product not found')}

        return product;
    }

    checkStock(productId: number, quantity: number) {
        const product = this.products.findIndex(product => product.productId === productId);

        if(product === -1) {throw new Error('Product not found')}

        return this.products[product].stock >= quantity;
    }

    setStock(productId: number, quantity: number) {
        const product = this.products.findIndex(product => product.productId === productId);
        this.products[product].stock -= quantity;
    }
}

let globalProducts = global as unknown as IGlobalInstance<ProductsService>

const products = initializeService(ProductsService, productsData, globalProducts, 'products');

export default products;