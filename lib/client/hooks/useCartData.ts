import { CartProduct } from '@/lib/client/models/cart';
import { useCart } from '@/lib/client/utils/CartProvider';
import { useSelectedProducts } from '@/lib/client/queries/products';
import { IProduct } from '@/lib/server/models/products';

export function useCartData() {
  const { cart } = useCart();
  const productIds = cart.map((cartItem) => cartItem.productId);

  const productResults = useSelectedProducts(productIds);

  const cartProducts = productResults
    .map((productResult) => productResult.data)
    .filter((product): product is IProduct => Boolean(product))
    .map((product) => ({
      product,
      quantity: cart.find(
        (cartItem) => cartItem.productId === product.productId
      )?.quantity,
    }))
    .filter(
      (cartProduct): cartProduct is CartProduct =>
        cartProduct.quantity !== undefined
    );

  return { cartProducts };
}
