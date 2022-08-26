import React from 'react';
import styled from 'styled-components';

function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div className='textDiv'>
        <h3>Join our newsletter and get discounts!</h3>
        <p>
          Be the first to learn about promotions, special events, new arrivals
          and more!
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Email Address' />
        <button type='submit' onSubmit={handleSubmit}>
          Subscribe
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  padding: 6.4rem 0;
  width: 100%;
  background-color: var(--blue-shade-4);
  color: var(--grey-3);

  .textDiv {
    max-width: 50rem;

    h3 {
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  form {
    input {
      padding: 1rem;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      font-family: inherit;
      font-size: 1.8rem;
      width: 40rem;
      height: 5.6rem;
      border: none;
    }

    button {
      padding: 1rem 2rem;
      height: 5.6rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      font-family: inherit;
      font-size: 1.6rem;
      text-transform: uppercase;
      background-color: var(--yellow-4);
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in;
    }

    input::placeholder {
      color: var(--grey-5);
    }

    button:hover {
      background-color: var(--yellow-1);
    }
  }

  @media (max-width: 1150px) {
    padding: 6.4rem 4rem;
    justify-content: normal;
    gap: 3rem;

    .textDiv {
      max-width: 40rem;
    }

    form input {
      width: 40rem;
    }
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 3rem;

    .textDiv {
      max-width: 60rem;
    }
  }

  @media (max-width: 630px) {
    align-items: normal;
    justify-content: normal;
    width: 100%;
    padding: 6.4rem 1rem;

    form input {
      width: 100%;
      height: 4.8rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    form button {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      font-size: 1.6rem;
      width: 100%;
      height: 3.6rem;
      margin-top: 1rem;
    }
  }
`;

export default Newsletter;
