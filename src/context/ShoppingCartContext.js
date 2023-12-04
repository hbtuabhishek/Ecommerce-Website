import React, { createContext, ReactNode, useContext, useState } from "react";


const ShoppongCartProviderProps = {
    children: ReactNode,
};
const CartItem = {
    id:Number,
    quantity:Number,
};

const ShoppingCartContext = createContext({
    getItemQuantity: (id) => Number,
    increaseCartQuantity: (id) => null,
    decreaseCartQuantity: (id) => null,
    removeFromCart: (id) => null,
});
//const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
return useContext(ShoppingCartContext);
}
export const ShoppongCartProvider = ({
  children,
}: ShoppongCartProviderProps) => {
  const [CartItems, setCartItems] = useState([]);

  const getItemQuantity = (id: Number) => {
    return CartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id: Number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id: Number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id: Number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
