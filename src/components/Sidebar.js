import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoPersonAdd, IoCart, IoClose } from 'react-icons/io5';
import logo from '../assets/workplaylogo.svg';
import { navLinks } from '../utils/navLinks';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Wrapper>
      {!isSidebarOpen && (
        <button
          type='button'
          className='navCircle'
          onClick={() => setIsSidebarOpen(true)}
        >
          <div className='line'></div>
        </button>
      )}

      <div className={isSidebarOpen ? 'sidebar show' : 'sidebar'}>
        <IoClose className='close' onClick={() => setIsSidebarOpen(false)} />
        <div className='linksDiv'>
          {navLinks.map((link, idx) => {
            return (
              <NavLink key={idx} to={link.path} className='navlink links'>
                {link.icon}
                <span className='linkName'>{link.name}</span>
              </NavLink>
            );
          })}

          <div className='cartAndAuthDiv'>
            <NavLink className='links' to='/cart'>
              <IoCart className='icon' />
              <span className='linkName'>Cart</span>
            </NavLink>
            <NavLink className='links' to='/login'>
              <IoPersonAdd className='icon' />
              <span className='linkName'>LogIn</span>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  .sidebar {
    height: 100vh;
    width: 30rem;
    background-color: var(--purple-3);
    color: var(--grey-10);
    position: fixed;
    top: 0;
    right: 0%;
    transform: translateX(200%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    z-index: 9999;
    -webkit-transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    -moz-transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    -o-transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    .close {
      position: absolute;
      top: 4rem;
      right: 3.8rem;
      font-size: 4.8rem;
      cursor: pointer;
    }
  }

  .show {
    transform: translateX(0%);

    visibility: visible;
    opacity: 1;
  }

  .navCircle {
    outline: none;
    border: none;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: var(--purple-3);
    cursor: pointer;
    box-shadow: 0 1rem 1rem var(--shadow);
    z-index: 9999;

    &:hover {
      .line::before {
        top: 0;
        transform: rotate(45deg);
      }

      .line::after {
        top: 0;
        transform: rotate(-45deg);
      }

      .line {
        background-color: transparent;
      }
    }

    .line {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 4rem;
      height: 0.5rem;
      background-color: var(--active);
      -webkit-transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      -moz-transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      -o-transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    .line::before {
      content: '';
      position: absolute;
      top: -200%;
      left: 0%;
      width: 4rem;
      height: 0.5rem;
      -webkit-transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      -moz-transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      -o-transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      background-color: var(--active);
    }

    .line::after {
      content: '';
      position: absolute;
      bottom: -200%;
      left: 0%;
      width: 4rem;
      height: 0.5rem;
      -webkit-transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      -moz-transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      -o-transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      background-color: var(--active);
    }
  }

  .linksDiv {
    margin: 0 auto;
  }

  .cartAndAuthDiv,
  .linksDiv {
    display: flex;
    flex-direction: column;
  }

  .links {
    margin-bottom: 1.6rem;
  }

  .links:hover {
    transform: translateY(0);
  }

  .linkName {
    font-size: 2.4rem;
    text-transform: capitalize;
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

  .icon {
    font-size: 3.2rem;
    margin-right: 1rem;
    margin-bottom: -0.5rem;
  }
`;

export default Sidebar;
