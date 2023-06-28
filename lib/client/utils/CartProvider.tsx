import { PropsWithChildren, createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ICartItem } from '@/lib/server/models/carts';
import { useAuth } from './AuthProvider';
import { useCartItems } from '../queries/user';
import { useUpdateCart } from '../mutations/user';

const isCartItem = (cartItem: any) =>
  typeof cartItem.productId === 'number' &&
  typeof cartItem.quantity === 'number';

export type CartProviderValue = {
  updateCart: (cartItem: ICartItem) => void;
};

const CartContext = createContext<CartProviderValue | null>(null);
const updateCartItemKey = 'updateCartItem';

export function CartProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const { isLoggedIn, getUser } = useAuth();
  const { data } = useCartItems();
  const updateCartMutation = useUpdateCart();
  const loggedIn = isLoggedIn();

  const getUpdatedCartItems = (cartItem: ICartItem) => {
    if (data) {
      const currentCart = [...data];
      const currentCartItemIndex = data.findIndex(
        (item) => item.productId === cartItem.productId
      );

      if (currentCartItemIndex === -1) {
        currentCart.push(cartItem);
      } else {
        currentCart[currentCartItemIndex] = cartItem;
      }

      return currentCart;
    }

    return [cartItem];
  };

  const updateCartRequest = (cartItem: ICartItem) => {
    const user = getUser();
    if (user) {
      const updatedCartItems = getUpdatedCartItems(cartItem);
      updateCartMutation.mutate({
        userId: user.userId,
        cart: updatedCartItems,
      });
    }
  };

  const updateCart = (cartItem: ICartItem) => {
    if (!isLoggedIn()) {
      sessionStorage.setItem(updateCartItemKey, JSON.stringify(cartItem));
      router.push({
        pathname: '/login',
        query: { ...router.query, returnTo: router.pathname },
      });
      return;
    }

    updateCartRequest(cartItem);
  };

  const restoreUpdateCart = () => {
    if (loggedIn) {
      const stringifiedCartItem = sessionStorage.getItem(updateCartItemKey);
      if (stringifiedCartItem) {
        const cartItem = JSON.parse(stringifiedCartItem);
        if (isCartItem(cartItem)) {
          updateCartRequest(cartItem);
          sessionStorage.removeItem(updateCartItemKey);
        }
      }
    }
  };

  useEffect(() => {
    restoreUpdateCart();
  }, [loggedIn]);

  return (
    <CartContext.Provider value={{ updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart should be used within CartProvider');
  }
  return context;
}
