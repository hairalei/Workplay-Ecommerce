import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
  COUNT_CART_TOTALS,
} from '../utils/actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }

            return { ...cartItem, amount: newAmount };
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0],
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE_ITEM:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload)],
      };

    case TOGGLE_AMOUNT: {
      const { id, value } = action.payload;

      const tempCart = state.cart.map((item) => {
        let newAmount = item.amount;
        if (item.id === id) {
          if (value === 'inc') {
            newAmount = item.amount >= item.max ? item.max : item.amount + 1;
          } else {
            newAmount = item.amount === 1 ? 1 : item.amount - 1;
          }
        }
        return { ...item, amount: newAmount };
      });
      return { ...state, cart: tempCart };
    }

    case COUNT_CART_TOTALS: {
      const { totalItems, totalProductsPrice } = state.cart.reduce(
        (total, item) => {
          return {
            totalItems: total.totalItems + item.amount,
            totalProductsPrice:
              total.totalProductsPrice + item.amount * item.price,
          };
        },
        { totalItems: 0, totalProductsPrice: 0 }
      );

      return {
        ...state,
        totalProductsPrice,
        totalItems,
        shippingFee: totalProductsPrice >= 5000 ? 0 : 499,
      };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cartReducer;
