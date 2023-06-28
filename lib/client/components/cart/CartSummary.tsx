import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartSummaryContainer } from '@/lib/client/components/cart/Cart.styles';
import { CartProduct } from '../../models/cart';

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
  const totalPrice = getTotalPrice(cartProducts);

  const handleCheckout = () => {
    // TODO: implement checkout
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
        {`Total price: ${totalPrice}$`}
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
