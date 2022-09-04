import {
  SET_CURRENT_USER,
  SET_USER_ID,
  ADD_TO_ORDER_HISTORY,
  LOADING,
  GET_ORDER_HISTORY,
} from '../utils/actions';

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return { ...state, currentUser: action.payload };
    }

    case SET_USER_ID: {
      return { ...state, userID: action.payload };
    }

    case GET_ORDER_HISTORY: {
      return { ...state, orderHistory: action.payload };
    }

    case LOADING: {
      return { ...state, isLoading: action.payload };
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default userReducer;
