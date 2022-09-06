import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoPerson } from 'react-icons/io5';
import { useUserContext } from '../context/userContext';

function AccountButton() {
  const { currentUser } = useUserContext();

  return (
    <Wrapper>
      <Link
        className='linkName profile'
        to={currentUser ? '/profile' : '/login'}
      >
        {currentUser ? (
          <span>
            <IoPerson />
            Profile
          </span>
        ) : (
          'login'
        )}
      </Link>
      {currentUser && (
        <Link className='showLogout' to='/logout'>
          Logout
        </Link>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  .linkName.profile {
    span {
      letter-spacing: 0.8px;
    }

    svg {
      font-size: 2.4rem;
      margin-right: 0.4rem;
    }
  }

  .showLogout {
    position: absolute;
    bottom: -6.5rem;
    left: 0;
    width: 100%;
    font-family: Orbitron;
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--red-1);
    background-color: var(--grey-3);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 2rem 1rem;
    height: 6rem;
    transform: translateY(-50%) rotateX(90deg);
    opacity: 0.8;
    transition: all 0.3s linear;

    &:hover {
      color: var(--red-2);
      transform: translateY(0%) rotateX(0);
      opacity: 1;
    }
  }

  .linkName.profile:hover + .showLogout {
    transform: translateY(0%) scale(1);
  }
`;

export default AccountButton;
