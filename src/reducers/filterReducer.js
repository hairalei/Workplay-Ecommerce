import React from 'react';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions';

const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return { ...state, filteredProducts: [...action.payload] };
    }

    case SET_GRIDVIEW: {
      return { ...state, gridView: true };
    }

    case SET_LISTVIEW: {
      return { ...state, gridView: false };
    }
  }

  throw new Error(`No matching ${action.type} action type`);
};

export default filterReducer;
