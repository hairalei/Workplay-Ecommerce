import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CartButton } from './';
import {
  IoClose,
  IoPersonAdd,
  IoPersonRemove,
  IoPerson,
} from 'react-icons/io5';
import { navLinks } from '../utils/navLinks';
import { useUserContext } from '../context/userContext';
import { useProductsContext } from '../context/productsContext';

function Sidebar({ scrollHeight }) {
  const { currentUser } = useUserContext();
  const { setScrollHeight } = useProductsContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollOnTop = () => {
    setScrollHeight(0);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      {!isSidebarOpen && (
        <button
          type='button'
          className={scrollHeight > 20 ? 'navCircle shadow' : 'navCircle'}
          onClick={() => setIsSidebarOpen(true)}
        >
          <div className='line'></div>
        </button>
      )}

      <div className={isSidebarOpen ? 'sidebar show' : 'sidebar'}>
        <IoClose
          className='close'
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        />
        <div className='linksDiv'>
          {navLinks.map((link, idx) => {
            return (
              <NavLink
                key={idx}
                to={link.path}
                className='navlink links'
                onClick={() => {
                  setIsSidebarOpen(false);
                  scrollOnTop();
                }}
              >
                {link.icon}
                <span className='linkName'>{link.name}</span>
              </NavLink>
            );
          })}

          <div className='cartAndAuthDiv'>
            <div
              className='cartDiv'
              onClick={() => {
                setIsSidebarOpen(false);
                scrollOnTop();
              }}
            >
              <CartButton />
              <NavLink to='/cart' className='linkName cart'>
                cart
              </NavLink>
            </div>

            <div
              className=''
              onClick={() => {
                setIsSidebarOpen(false);
                scrollOnTop();
              }}
            >
              {currentUser ? (
                <NavLink to='/profile'>
                  <IoPerson className='icon' />
                  <span className='linkName'>Profile</span>
                </NavLink>
              ) : (
                <NavLink to='/login'>
                  <IoPersonAdd className='icon' />
                  <span className='linkName'>Login</span>
                </NavLink>
              )}
            </div>
          </div>
          {currentUser && (
            <NavLink
              className='logout'
              to='/logout'
              onClick={() => {
                setIsSidebarOpen(false);
                scrollOnTop();
              }}
            >
              <IoPersonRemove className='icon' />
              <span className='linkName'>Logout</span>
            </NavLink>
          )}
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

  .shadow {
    box-shadow: 0 1rem 1rem var(--shadow);
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
    /* box-shadow: 0 1rem 1rem var(--shadow); */
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

  .linksDiv {
    display: flex;
    flex-direction: column;
  }

  .links {
    margin-bottom: 2rem;
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
    transition: all 0.4s ease-in;

    &:hover {
      color: var(--active);
    }
  }

  .cartAndAuthDiv {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .cartDiv,
    .accountDiv {
      display: flex;
      gap: 1rem;
      font-size: 3.2rem;
    }

    .cart {
      position: relative;
    }

    .cart::after {
      content: '';
      position: absolute;
      bottom: 0.8rem;
      left: 0;
      background-color: var(--active);
      width: 0%;
      height: 0.3rem;
      transition: all 0.4s ease-in;
    }

    .cart:hover::after {
      width: 100%;
    }
  }

  .logout {
    margin-top: 10rem;
    color: var(--red-2);
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    .sidebar {
      width: 50vw;
    }

    .navCircle {
      top: 0.7rem;
      right: 3rem;
      width: 6rem;
      height: 6rem;
    }

    .sidebar .close {
      top: 1.8rem;
      right: 3.8rem;
    }
  }

  @media (max-width: 480px) {
    .sidebar {
      width: 100vw;

      .close {
        top: 1rem;
        right: 1.8rem;
      }
    }

    .navCircle {
      top: 1rem;
      right: 2rem;
      width: 5rem;
      height: 5rem;
      padding: 0.4rem;

      .line {
        height: 0.25rem;
        width: 3rem;
      }

      .line::before {
        top: -250%;
        left: 0%;
        width: 3rem;
        height: 0.3rem;
      }

      .line::after {
        bottom: -250%;
        left: 0%;
        width: 3rem;
        height: 0.3rem;
      }
    }
  }
`;

export default Sidebar;
