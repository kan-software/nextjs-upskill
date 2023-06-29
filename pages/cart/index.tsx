import Button from '@mui/material/Button';
import Link from '@/lib/client/components/shared/Link';
import {
  CartContainer,
  CartGrid,
} from '@/lib/client/components/cart/Cart.styles';
import { CartSummary } from '@/lib/client/components/cart/CartSummary';
import { CartProductItem } from '@/lib/client/components/cart/CartProductItem';
import { useCartData } from '@/lib/client/hooks/useCartData';

export default function Cart() {
  const { cartProducts } = useCartData();

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
