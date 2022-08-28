import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

function Form() {
  const title = useLocation().pathname.slice(1);

  const handleOnChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div className='container'>
        <h1 className='heading'>{title}</h1>
        <form className='form' onSubmit={handleSubmit}>
          {title === 'signup' && (
            <>
              <label htmlFor='fullname'>full name</label>
              <input type='text' id='fullname' placeholder='Joey Tribbiani' />
            </>
          )}
          <label htmlFor='email'>email</label>
          <input type='email' id='email' placeholder='joeytribbiani@mail.com' />
          <label htmlFor='password'>password</label>
          <input type='password' id='password' placeholder='Password' />

          <span className='error'>error</span>
          <button className='btnSubmit' type='submit' onSubmit={handleSubmit}>
            {title}
          </button>
        </form>

        <div className='switchDiv'>
          <p className='switch'>
            {title === 'login' ? 'No account yet?' : 'Already have an account?'}
          </p>
          <Link
            className='switchLink'
            to={`/${title === 'login' ? 'signup' : 'login'}`}
          >
            {title === 'login' ? 'signup' : 'login'}
          </Link>
          <span>instead &rarr;</span>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  height: 100%;
  min-height: 95vh;
  max-height: 150vh;
  background-color: var(--purple-5);

  .heading {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  .container {
    max-width: 40vw;
    width: 100%;
    background-color: var(--purple-1);
    padding: 4rem;
    border-radius: 2rem;
    box-shadow: 0 2rem 3rem var(--shadow);
    color: var(--grey-9);

    .form {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      & label {
        text-transform: capitalize;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      & input {
        padding: 1rem 1.5rem;
        width: 100%;
        border-radius: 1rem;
        font-size: 1.8rem;
        font-family: inherit;
        color: var(--black);
        background-color: var(--bg-color);
        border: 3px solid blue;
        border: none;
        margin-bottom: 2.4rem;
      }

      & input::placeholder {
        color: var(--grey-5);
      }

      & .error {
        font-size: 1.6rem;
        font-weight: bold;
        color: var(--red-2);
        margin-bottom: 1rem;
      }

      & .btnSubmit {
        align-self: center;
        width: 50%;
        text-transform: uppercase;
        font-family: inherit;
        font-size: 1.6rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: none;
        color: inherit;
        background-color: var(--blue);
        box-shadow: 0 0.5rem 1rem var(--shadow);
        margin-bottom: 1.2rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: var(--primary-light);
        }

        &:active {
          transform: scale(0.98);
          box-shadow: 0 0.25rem 0.5rem var(--shadow);
        }

        &:focus-visible {
          border: 3px dotted var(--blue-shade-3);
        }

        @media (max-width: 980px) {
          width: 100%;
          align-self: normal;
        }
      }
    }

    .switchDiv {
      text-align: center;

      .switch,
      span {
        font-size: 1.4rem;
      }

      .switchLink {
        text-transform: capitalize;
        color: var(--blue-shade-3);
        font-weight: bold;
        border-bottom: 3px solid var(--blue-shade-3);
        margin-right: 0.5rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--blue-shade-2);
        }
      }
    }
  }

  @media (max-width: 980px) {
    .container {
      padding: 3rem;
      max-width: 60vw;
    }
  }

  @media (max-width: 600px) {
    .heading {
      font-size: 3.6rem;
      margin-bottom: 1.6rem;
    }
    .container {
      padding: 2rem;
      max-width: 90%;

      .form {
        label {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        input {
          margin-bottom: 1.6rem;
        }
      }
    }
  }
`;

export default Form;
