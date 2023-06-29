import { useState } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { ProductsQuantitySelect } from '@/lib/client/components/shared/ProductsQuantitySelect';
import { CartProduct } from '@/lib/client/models/cart';
import {
  CartProductContainer,
  ProductsQuantityContainer,
} from '@/lib/client/components/cart/Cart.styles';
import { useCart } from '../../utils/CartProvider';

export type CartProductItemProps = {
  cartProduct: CartProduct;
};

export function CartProductItem({ cartProduct }: CartProductItemProps) {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const { updateCart, removeCartItem } = useCart();
  const { product } = cartProduct;

  const handleDelete = () => {
    removeCartItem(product.productId);
  };

  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    updateCart({ productId: product.productId, quantity: newQuantity });
  };

  return (
    <CartProductContainer
      key={product.productId}
      image={
        <Image
          priority
          src={product.image}
          width={150}
          height={150}
          alt={product.title}
          style={{ objectFit: 'contain' }}
        />
      }
    >
      <Typography
        variant="h6"
        mb={2}
      >
        {product.title}
      </Typography>
      <Typography mb={2}>Price: {product.price}$</Typography>
      <ProductsQuantityContainer>
        <ProductsQuantitySelect
          value={quantity}
          stock={product.stock}
          onChange={handleChangeQuantity}
        />
        <IconButton
          aria-label="delete cart product"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </ProductsQuantityContainer>
    </CartProductContainer>
  );
}
