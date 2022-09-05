import React, { useContext, useReducer, useEffect } from 'react';
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import reducer from '../reducers/productsReducer';
import {
  FETCH_PRODUCTS,
  SET_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  SET_SINGLE_PRODUCT,
  SET_SCROLL_HEIGHT,
  SHOW_ERROR,
} from '../utils/actions';

const initialState = {
  products: [],
  singleProduct: {},
  isProductsLoading: false,
  productsError: null,
  scrollHeight: 0,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = () => {
    dispatch({ type: FETCH_PRODUCTS });
    try {
      const ref = collection(db, 'products');

      const unsub = onSnapshot(ref, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: SET_PRODUCTS, payload: results });
      });

      return () => unsub();
    } catch (error) {
      dispatch({ type: SHOW_ERROR, payload: error });
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: FETCH_SINGLE_PRODUCT });
    try {
      const ref = doc(db, 'products', id);
      const docSnap = await getDoc(ref);

      if (docSnap.exists()) {
        dispatch({
          type: SET_SINGLE_PRODUCT,
          payload: { ...docSnap.data(), id },
        });
      } else {
        dispatch({ type: SHOW_ERROR, payload: 'No such product exists.' });
      }
    } catch (error) {
      dispatch({ type: SHOW_ERROR, payload: error });
    }
  };

  const setScrollHeight = (height) => {
    dispatch({ type: SET_SCROLL_HEIGHT, payload: height });
  };

  useEffect(() => fetchProducts(), []);

  return (
    <ProductsContext.Provider
      value={{ ...state, fetchSingleProduct, setScrollHeight }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
