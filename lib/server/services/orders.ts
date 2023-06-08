import { ordersData } from '@/lib/server/data/orders';
import { IOrder, IOrderItem, IOrderService } from '@/lib/server/models/orders';
import products from '@/lib/server/services/products';
import { IProductService } from '@/lib/server/models/products';
import {IGlobalInstance, initializeService} from "@/lib/server/utils/initializeService";

class OrdersService implements IOrderService {
    constructor(private orders: IOrder[], private productsService: IProductService) {}

    getOrders(userId: number) {
        const ordersList = this.orders.filter(order => order.userId === userId);

        if(ordersList.length === 0) {throw new Error('Orders not found')}

        return ordersList;
    }

    createOrder(userId: number, items: IOrderItem[]) {
        items.forEach(item => {
            this.productsService.setStock(item.productId, item.quantity)
        })

        const orderId = this.orders.length + 1;
        const date = new Date().toISOString();

        this.orders.push({
            orderId,
            userId,
            date,
            items
        })
    }
}

let globalOrders = global as unknown as IGlobalInstance<OrdersService>

const orders = initializeService(OrdersService, ordersData, globalOrders, 'ordersService', products);

export default orders;