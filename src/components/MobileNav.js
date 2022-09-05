import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoPerson, IoHome, IoCart } from 'react-icons/io5';
import { useUserContext } from '../context/userContext';
import { useCartContext } from '../context/cartContext';

function MobileNav() {
  const { currentUser } = useUserContext();
  const { totalItems } = useCartContext();

  const scrollOnTop = () => window.scrollTo(0, 0);

  return (
    <Wrapper>
      <div className='container'>
        <Link to='/' className='home' onClick={scrollOnTop}>
          <IoHome />
          Home
        </Link>

        <Link
          to={currentUser ? '/profile' : '/login'}
          className='profile'
          onClick={scrollOnTop}
        >
          <IoPerson />
          {currentUser ? 'Profile' : 'Login'}
        </Link>

        <Link to='/cart' className='cart' onClick={scrollOnTop}>
          <div>
            <IoCart />
            <span className='totalItems'>{totalItems}</span>
          </div>
          Cart
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: none;

  .container {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100vw;
    background-color: var(--grey-3);
    position: fixed;
    bottom: 0;
    left: 0;
    height: 7rem;
    padding: 1rem 0;

    .home,
    .profile,
    .cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--grey-6);

      svg {
        font-size: 3.2rem;
        color: var(--grey-8);
      }
    }

    .cart {
      & div {
        position: relative;
      }

      & .totalItems {
        position: absolute;
        top: 0;
        right: -0.5rem;
        background-color: red;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        padding: 0.2rem;
        font-size: 1.2rem;
        color: var(--white);
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
    width: 100vw;
  }

  @media (max-width: 480px) {
    .home,
    .profile,
    .cart {
      font-size: 1.4rem;

      svg {
        font-size: 2.8rem;
      }
    }
  }
`;

export default MobileNav;
