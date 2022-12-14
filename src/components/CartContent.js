import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem;

  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    text-align: center;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    background: var(--purple-3);
    color: var(--grey-3);
    border-radius: 1rem;
    letter-spacing: 1px;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background: var(--purple-4);
    }
  }
  .clear-btn {
    background: var(--red-1);
    transition: all 0.4s ease-in-out;

    &:hover {
      background: var(--red-2);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 0;

    .link-container {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
export default CartContent;
