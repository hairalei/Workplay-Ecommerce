import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import error from '../assets/error.png';

function Error() {
  return (
    <Wrapper>
      <img src={error} alt='error' />
      <h1>Error 404</h1>
      <p>page not found</p>
      <Link to='/' className='btnBack'>
        back to home
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  padding-top: 15rem;
  background-color: var(--grey-9);
  color: var(--grey-2);
  height: 100vh;

  img {
    max-height: 30rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 4.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 2.4rem;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  .btnBack {
    background-color: var(--blue-shade-3);
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: var(--blue-shade-2);
    }
  }

  @media (max-width: 600px) {
    padding-top: 12rem;
    max-height: 100vh;

    img {
      height: 20rem;
    }

    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

export default Error;
