import React, { useContext, useEffect, useReducer } from 'react';
import {
  SET_CURRENT_USER,
  SET_USER_ID,
  ADD_TO_ORDER_HISTORY,
  GET_ORDER_HISTORY,
  LOADING,
} from '../utils/actions';
import moment from 'moment';
import reducer from '../reducers/userReducer';
import { db } from '../firebase/firebase.config';
import {
  doc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  getDoc,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

const initialState = {
  currentUser: null,
  orderHistory: [],
  currentDisplayName: null,
  userID: null,
  isLoading: false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.currentUser) return;

    dispatch({ type: LOADING, payload: true });
    const ref = collection(db, 'users');

    const unsub = onSnapshot(ref, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data() });
      });
      const user = results.find((user) => user.email === state.currentUser);

      dispatch({ type: SET_USER_ID, payload: user.uid });
      dispatch({ type: LOADING, payload: false });

      return () => unsub();
    });
  }, [state.currentUser]);

  const getOrderHistory = async () => {
    if (!state.userID) return;

    const docRef = doc(db, 'users', state.userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log(docSnap.data());
      if (!docSnap.data().orderHistory) return;
      const orderHistory = docSnap.data().orderHistory;

      dispatch({ type: GET_ORDER_HISTORY, payload: orderHistory });
    }
  };

  const setCurrentUser = (user) => {
    dispatch({ type: SET_CURRENT_USER, payload: user });
  };

  const addToOrderHistory = async (orderID, cart) => {
    try {
      const ref = doc(db, 'users', state.userID);

      await updateDoc(ref, {
        orderHistory: arrayUnion({
          orderID,
          cart,
          orderTimestamp: Date.now(),
          date: moment().format('lll'),
        }),
      });
      console.log('orderTimestamp');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{ ...state, setCurrentUser, addToOrderHistory, getOrderHistory }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
