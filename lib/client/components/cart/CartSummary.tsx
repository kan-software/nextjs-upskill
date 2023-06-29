import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartSummaryContainer } from '@/lib/client/components/cart/Cart.styles';
import { CartProduct } from '../../models/cart';
import { useCreateOrder } from '../../mutations/orders';
import { useAuth } from '../../utils/AuthProvider';
import { IOrderItem } from '@/lib/server/models/orders';
import { useRouter } from 'next/router';

export type CartSummaryProps = {
  cartProducts: CartProduct[];
};

const getTotalPrice = (cartProducts: CartProduct[]) => {
  return cartProducts.reduce(
    (sum, cartProduct) =>
      sum + cartProduct.product.price * cartProduct.quantity,
    0
  );
};

export function CartSummary({ cartProducts }: CartSummaryProps) {
  const router = useRouter();
  const { getUser } = useAuth();
  const createOrderMutation = useCreateOrder();
  const totalPrice = getTotalPrice(cartProducts);

  const handleCheckout = () => {
    const user = getUser()!;
    const orderItems: IOrderItem[] = cartProducts.map((cartProduct) => ({
      quantity: cartProduct.quantity,
      productId: cartProduct.product.productId,
      price: cartProduct.product.price,
    }));
    createOrderMutation.mutate({ userId: user.userId, items: orderItems });
    router.push('/');
  };

  return (
    <CartSummaryContainer>
      <Typography
        variant="h5"
        mb={2}
      >
        Cart
      </Typography>
      <Typography>Summary:</Typography>
      <Typography
        variant="body2"
        mb={3}
      >
        {`Total price: ${totalPrice.toFixed(2)}$`}
      </Typography>
      <Button
        variant="contained"
        fullWidth
        onClick={handleCheckout}
      >
        Proceed to checkout
      </Button>
    </CartSummaryContainer>
  );
}
