import { useRouter } from 'next/router';
import { ICartItem } from '@/lib/server/models/carts';
import { useAuth } from './AuthProvider';
import { useCartItems } from '../queries/user';
import { useUpdateCart } from '../mutations/user';

const isCartItem = (cartItem: any) =>
  typeof cartItem.productId === 'number' &&
  typeof cartItem.quantity === 'number';

const updateCartItemKey = 'updateCartItem';

export function useCartUtils() {
  const router = useRouter();
  const { isLoggedIn, getUser } = useAuth();
  const { data } = useCartItems();
  const updateCartMutation = useUpdateCart();
  const loggedIn = isLoggedIn();
  const currentCart = data ?? [];

  const getUpdatedCartItems = (newCartItem: ICartItem) => {
    const currentCartItemIndex = currentCart.findIndex(
      (item) => item.productId === newCartItem.productId
    );

    if (currentCartItemIndex === -1) {
      return [...currentCart, newCartItem];
    } else {
      return currentCart.map((currentItem, index) =>
        index == currentCartItemIndex ? newCartItem : currentItem
      );
    }
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

  const getCartItemByProductId = (productId: number) => {
    return (
      currentCart?.find((cartItem) => cartItem.productId === productId) ?? null
    );
  };

  const removeCartItem = (productId: number) => {
    const user = getUser();
    if (currentCart && user) {
      const cartItems = currentCart.filter(
        (cartItem) => cartItem.productId !== productId
      );
      updateCartMutation.mutate({
        userId: user.userId,
        cart: cartItems,
      });
    }
  };

  return {
    cart: currentCart,
    updateCart,
    restoreUpdateCart,
    getCartItemByProductId,
    removeCartItem,
  };
}
