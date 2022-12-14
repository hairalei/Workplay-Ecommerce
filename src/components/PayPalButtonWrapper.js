import React, { useEffect } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';
import { useProductsContext } from '../context/productsContext';
import Loading from './Loading';
import { toast } from 'react-toastify';

const initialOptions = {
  'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
};

function PayPalButtonWrapper() {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const { addToOrderHistory } = useUserContext();
  const { decreaseStock } = useProductsContext();
  const { cart, totalProductsPrice, shippingFee, clearCart } = useCartContext();

  const itemsDescription = cart.map((item) => item.name).join(' & ');
  const totalPrice = (totalProductsPrice + shippingFee) / 100;
  const navigate = useNavigate('/');

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: initialOptions.currency,
      },
    });
  }, []);

  return (
    <>
      {isPending && <Loading />}
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  description: itemsDescription,
                  amount: {
                    value: totalPrice.toString(),
                  },
                },
              ],
            })
            .catch((err) =>
              toast.error(`Create order failed. Error: ${err.message}`)
            );
        }}
        onApprove={(data, actions) => {
          return actions.order
            .capture()
            .then((details) => {
              const name = details.payer.name.given_name;
              console.log(data);
              addToOrderHistory(data.orderID, cart, totalPrice);
              decreaseStock(cart);
              toast.success(
                `Payment Success! Transaction completed by ${name}`
              );
              navigate('/profile');
              clearCart();
            })
            .catch((err) =>
              toast.error(`Payment failed. Error: ${err.message}`)
            );
        }}
      />
    </>
  );
}

export default PayPalButtonWrapper;
