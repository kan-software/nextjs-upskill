import Button from '@mui/material/Button';
import { CartProduct } from '@/lib/client/models/cart';
import { productsData } from '@/lib/server/data/products';
import Link from '@/lib/client/components/shared/Link';
import {
  CartContainer,
  CartGrid,
} from '@/lib/client/components/cart/Cart.styles';
import { CartSummary } from '@/lib/client/components/cart/CartSummary';
import { CartProductItem } from '@/lib/client/components/cart/CartProductItem';

const cartProducts: CartProduct[] = [
  {
    product: productsData[0],
    quantity: 1,
  },
  {
    product: productsData[1],
    quantity: 1,
  },
];

export default function Cart() {
  return (
    <CartContainer>
      <Button
        component={Link}
        href="/"
      >
        Back
      </Button>
      <CartGrid summary={<CartSummary cartProducts={cartProducts} />}>
        {cartProducts.map((cartProduct) => (
          <CartProductItem
            key={cartProduct.product.productId}
            cartProduct={cartProduct}
          />
        ))}
      </CartGrid>
    </CartContainer>
  );
}
