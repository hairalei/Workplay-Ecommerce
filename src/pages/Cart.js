import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { CartContent, ProductNavigation } from '../components';

function Cart() {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className='page-100 empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            shop our products
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <ProductNavigation title='cart' />
      <Wrapper>
        <CartContent />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.main`
  .page-100 {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empty {
    text-align: center;

    h2 {
      margin-bottom: 2rem;
      text-transform: none;
      font-size: 3.2rem;
    }
  }
`;

export default Cart;
