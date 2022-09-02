import React, { useEffect } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { useCartContext } from '../context/cartContext';
import PayPalButtonWrapper from '../components/PayPalButtonWrapper';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const initialOptions = {
  'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
};

function Checkout() {
  const email = 'sb-a2oqc20618385@personal.example.com';

  const copy = () => {
    navigator.clipboard.writeText(email);
    toast.success('Copied to clipboard!');
  };

  return (
    <Wrapper>
      <PayPalScriptProvider deferLoading={true} options={initialOptions}>
        <div>
          <h1>Choose payment:</h1>
          <PayPalButtonWrapper />
          <p onClick={copy}>
            <span className='email'>Click to Copy email:</span>{' '}
            sb-a2oqc20618385@personal.example.com
          </p>
          <p>
            <span className='password'>Remember password:</span> 123456789
          </p>
        </div>
      </PayPalScriptProvider>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 100vh;
  background-color: var(--white);
  color: var(--grey-7);

  div {
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 1rem;
  }

  h1 {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    color: var(--grey-5);
    cursor: pointer;
  }

  p:last-of-type {
    font-size: 2rem;
    font-weight: 900;
    color: red;
    margin-bottom: 2rem;
  }

  .email,
  .password {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 400;
  }

  .email {
    color: blue;
  }

  .password {
    color: red;
  }

  @media (max-width: 380px) {
    max-width: 100vw;

    div {
      width: 100%;
    }

    h1 {
      font-size: 2rem;
    }

    .email,
    .password {
      font-size: 1.6rem;
      display: block;
    }
  }
`;

export default Checkout;
