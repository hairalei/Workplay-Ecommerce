import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoCart } from 'react-icons/io5';
import { useUserContext } from '../context/userContext';

function CartButton() {
  const { number } = useUserContext();

  return (
    <Wrapper>
      <Link to='/cart'>
        <IoCart className='cart' />
        <span className='cartNum'>{number}</span>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  .cart {
    font-size: 3.2rem;
    transition: all 0.4s ease-in;
  }

  .cartNum {
    position: absolute;
    top: -0.5rem;
    right: -0.8rem;
    width: 2rem;
    height: 2rem;
    font-size: 1.6rem;
    text-align: center;
    border-radius: 50%;
    background-color: red;
  }

  .cart:hover::after {
    width: 0;
  }

  .cart:hover {
    color: var(--active);
  }
`;

export default CartButton;
