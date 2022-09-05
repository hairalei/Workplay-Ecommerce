import {
  FETCH_PRODUCTS,
  SET_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  SET_SINGLE_PRODUCT,
  SET_SCROLL_HEIGHT,
  SHOW_ERROR,
} from '../utils/actions';

const productsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return { ...state, isProductsLoading: true, productsError: null };
    }

    case SET_PRODUCTS: {
      return {
        ...state,
        products: [...action.payload],
        isProductsLoading: false,
      };
    }

    case FETCH_SINGLE_PRODUCT: {
      return { ...state, isProductsLoading: true, productsError: null };
    }

    case SET_SINGLE_PRODUCT: {
      return {
        ...state,
        singleProduct: { ...action.payload },
        isProductsLoading: false,
      };
    }

    case SHOW_ERROR: {
      return {
        ...state,
        productsError: action.payload,
        isProductsLoading: false,
      };
    }

    case SET_SCROLL_HEIGHT: {
      return { ...state, scrollHeight: action.payload };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default productsReducer;
