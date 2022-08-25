import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoPersonAdd, IoCart } from 'react-icons/io5';
import logo from '../assets/workplaylogo.svg';
import { navLinks } from '../utils/navLinks';
import Sidebar from './Sidebar';

function Navbar() {
  return (
    <Wrapper>
      <div className='logoDiv'>
        <img src={logo} alt='workplay logo' />
        <span>Workplay</span>
      </div>

      {window.innerWidth > 700 && (
        <>
          <div className='linksDiv'>
            {navLinks.map((link, idx) => {
              return (
                <NavLink key={idx} to={link.path} className='navlink'>
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          <div className='cartAndAuthDiv'>
            <NavLink to='/cart'>
              <IoCart className='icon' />
            </NavLink>
            <NavLink to='/login'>
              <IoPersonAdd className='icon' />
            </NavLink>
          </div>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  z-index: 99;
  box-shadow: 0 8px 15px var(--shadow);

  background-color: var(--blue-shade-3);
  background-color: var(--purple-3);
  color: var(--grey-3);
  transition: all 0.3s ease;

  .logoDiv {
    display: flex;
    align-items: center;
  }

  .logoDiv span {
    font-family: Orbitron;
    font-weight: 900;
    font-size: 4.8rem;
    text-transform: uppercase;
    /* color: var(--primary-dark); */
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

  @media (max-width: 1000px) and (min-width: 700px) {
    .logoDiv span {
      display: none;
    }

    .logoDiv img {
      width: 6.4rem;
      height: 6.4rem;
    }
  }

  @media (max-width: 1000px) {
    padding: 1rem 0;

    .logoDiv span {
      font-size: 2.4rem;
    }

    .logoDiv img {
      width: 4.8rem;
      height: 4.8rem;
      margin-right: 0.8rem;
    }
  }

  /* @media (max-width: 700) {
    padding: 0.25rem 0;
    background-color: red;

    .logoDiv span {
      font-size: 2.4rem;
    }

    .logoDiv img {
      width: 4.8rem;
      height: 4.8rem;
      margin-right: 0.8rem;
    }
  } */
`;

export default Navbar;
