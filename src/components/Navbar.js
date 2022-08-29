import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartButton, AccountButton } from './';
import styled from 'styled-components';
import logo from '../assets/workplaylogo.svg';
import { navLinks } from '../utils/navLinks';

function Navbar() {
  return (
    <Wrapper>
      <Link to='/' className='logoDiv'>
        <img src={logo} alt='workplay logo' />
        <span>Workplay</span>
      </Link>

      {window.innerWidth > 900 && (
        <>
          <div className='linksDiv'>
            {navLinks.map((link, idx) => {
              return (
                <NavLink key={idx} to={link.path} className='navlink'>
                  <span className='linkName'>{link.name}</span>
                </NavLink>
              );
            })}

            <div className='cartAndAuthDiv'>
              <CartButton />
              <AccountButton />
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  z-index: 999;
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
  }

  .logoDiv img {
    width: 10.9rem;
    height: 10.9rem;
  }

  .linksDiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navlink {
    text-transform: uppercase;
    margin-right: 3rem;
  }

  .cartAndAuthDiv {
    display: flex;
    align-items: center;
    margin-left: 8rem;
    gap: 3rem;
  }

  .linkName {
    font-size: 2.4rem;
    font-family: Orbitron;
    font-weight: 900;
    text-transform: uppercase;
    position: relative;
  }

  .linkName::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    background-color: var(--active);
    width: 0%;
    height: 0.3rem;
    transition: all 0.4s ease-in;
  }

  .linkName:hover::after {
    width: 100%;
  }

  @media (max-width: 1100px) {
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

  @media (max-width: 600px) {
    justify-content: start;
    padding-left: 1rem;
  }
`;

export default Navbar;
