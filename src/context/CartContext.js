import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemInCart = state.cartItems.find(item => item.id === action.item.id);
      if (itemInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.item, quantity: 1 }]
      };
    }
    case 'UPDATE_CART_QUANTITY': {
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.itemId
              ? { ...item, quantity: Math.max(0, action.quantity) }
              : item
          )
          .filter(item => item.quantity > 0)
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.itemId)
      };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


