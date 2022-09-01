import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { totalProductsPrice, shippingFee } = useCartContext();
  const { currentUser } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5 className='subtotal'>
            Subtotal : <span>{formatPrice(totalProductsPrice)}</span>
          </h5>
          <p className='shipping'>
            Shipping fee : <span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4 className='total'>
            Order total :{' '}
            <span>{formatPrice(totalProductsPrice + shippingFee)}</span>
          </h4>
        </article>

        {currentUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <Link to='/login' className='btn'>
            Log In
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid var(--grey-8);
    border-radius: 1rem;
    padding: 1.5rem 3rem;
  }

  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
  }

  h4 {
    margin-top: 2rem;
  }

  .subtotal {
    font-size: 1.6rem;
  }

  .shipping {
    font-size: 1.4rem;
  }

  .total {
    font-size: 1.8rem;
  }

  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
