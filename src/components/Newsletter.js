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
`;

export default Newsletter;
