import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { IoPersonAdd, IoCart } from 'react-icons/io5';
import logo from '../assets/workplaylogo.svg';

function Navbar() {
  return (
    <Wrapper>
      <div className='logoDiv'>
        <img src={logo} alt='workplay logo' />
        <span>Workplay</span>
      </div>

      <div className='linksDiv'>
        <Link to='/' className='navlink'>
          Home
        </Link>
        <Link to='/products' className='navlink'>
          Products
        </Link>
        <Link to='/about' className='navlink'>
          About
        </Link>
      </div>

      <div className='cartAndAuthDiv'>
        <Link to='/cart'>
          <IoCart className='icon' />
        </Link>
        <Link to='/login'>
          <IoPersonAdd className='icon' />
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  background-color: var(--primary-light);

  .logoDiv {
    display: flex;
    align-items: center;
  }

  .logoDiv span {
    font-family: Orbitron;
    font-weight: 900;
    font-size: 4.8rem;
    text-transform: uppercase;
    color: var(--primary-dark);
  }

  .logoDiv img {
    width: 10.9rem;
    height: 10.9rem;
  }

  .linksDiv {
  }

  .navlink {
    font-size: 2.4rem;
    font-family: Orbitron;
    font-weight: 900;
    text-transform: uppercase;
    margin-right: 3rem;
  }

  .navlink:last-of-type {
    margin-right: 0;
  }

  .cartAndAuthDiv .icon {
    font-size: 3.2rem;
  }

  .cartAndAuthDiv .icon:first-of-type {
    margin-right: 1.8rem;
  }
`;

export default Navbar;
