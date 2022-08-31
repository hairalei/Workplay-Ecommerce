import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cartReducer';
import { ADD_TO_CART } from '../utils/actions';

const initialState = {
  cart: [],
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

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
