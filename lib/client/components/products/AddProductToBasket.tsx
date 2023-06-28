import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { IProduct } from '@/lib/server/models/products';
import { ProductsQuantitySelect } from '../shared/ProductsQuantitySelect';
import { useCart } from '../../utils/CartProvider';

export type AddProductToBasketProps = {
  product: IProduct;
};

export function AddProductToBasket({ product }: AddProductToBasketProps) {
  const { updateCart, getCartItemByProductId } = useCart();
  const cartItem = getCartItemByProductId(product.productId);
  const [quantity, setQuantity] = useState(1);

  const handleAddToBasket = () => {
    updateCart({ productId: product.productId, quantity });
  };

  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (cartItem) {
      updateCart({ productId: product.productId, quantity: newQuantity });
    }
  };

  const handleDelete = () => {
    // TODO: handle delete from cart
  };

  const updateQuantityFromCart = () => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  };

  useEffect(() => {
    updateQuantityFromCart();
  }, [cartItem]);

  return product.stock > 0 ? (
    <>
      <ProductsQuantitySelect
        stock={product.stock}
        value={quantity}
        onChange={handleChangeQuantity}
      />
      {cartItem ? (
        <IconButton
          aria-label="delete cart product"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToBasket}
        >
          Add to basket
        </Button>
      )}
    </>
  ) : (
    <Typography>Out of stock</Typography>
  );
}
