import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cartReducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
  COUNT_CART_TOTALS,
} from '../utils/actions';

const initialState = {
  cart: JSON.parse(localStorage.getItem('workplay')) || [],
  totalItems: 0,
  totalProductsPrice: 0,
  shippingFee: 300,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, value } });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('workplay', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, clearCart, removeItem, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
