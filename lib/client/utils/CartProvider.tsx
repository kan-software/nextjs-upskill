import { PropsWithChildren, createContext, useContext, useEffect } from 'react';
import { ICartItem } from '@/lib/server/models/carts';
import { useAuth } from './AuthProvider';
import { useCartUtils } from './useCartUtils';

export type CartProviderValue = {
  updateCart: (cartItem: ICartItem) => void;
  getCartItemByProductId: (productId: number) => ICartItem | null;
  removeCartItem: (productId: number) => void;
};

const CartContext = createContext<CartProviderValue | null>(null);

export function CartProvider({ children }: PropsWithChildren) {
  const { isLoggedIn } = useAuth();
  const {
    updateCart,
    restoreUpdateCart,
    getCartItemByProductId,
    removeCartItem,
  } = useCartUtils();

  useEffect(() => {
    restoreUpdateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn()]);

  return (
    <CartContext.Provider
      value={{ updateCart, getCartItemByProductId, removeCartItem }}
    >
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
