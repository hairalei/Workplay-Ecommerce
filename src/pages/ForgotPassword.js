import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const buttonRef = useRef(null);

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent');
      buttonRef.current.disabled = true;
    } catch (err) {
      toast.error('Could not send reset email');
    }
  };

  return (
    <Wrapper>
      <div className='container'>
        <h1 className='pageHeader'>Forgot Password</h1>

        <form onSubmit={onSubmit}>
          {email.length > 0 && <label>Email</label>}
          <input
            type='email'
            className='emailInput'
            placeholder='Enter Email'
            id='email'
            value={email}
            onChange={onChange}
          />

          <button
            type='submit'
            className='btnSubmit'
            onSubmit={onSubmit}
            ref={buttonRef}
          >
            send reset link
          </button>

          <Link className='btnBack' to='/login'>
            back to login
          </Link>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: var(--grey-10);
  color: var(--black);

  display: flex;
  flex-direction: column;
  justify-content: center;

  .container {
    max-width: 40vw;
    width: 100%;
    margin: 0 auto;
    background-color: var(--bg-color);
    padding: 4rem;
    border-radius: 2rem;
    box-shadow: 0 2rem 3rem var(--shadow);
    color: var(--grey-9);

    h1 {
      margin-bottom: 3rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      & label {
        font-family: inherit;
        font-weight: bold;
        font-size: 1.4rem;
        color: var(--grey-6);
        letter-spacing: 2px;
        text-transform: uppercase;
        padding-left: 0.5rem;
        margin-bottom: 0.5rem;
      }

      & input {
        padding: 1rem 1.5rem;
        width: 100%;
        border-radius: 1rem;
        font-size: 1.8rem;
        font-family: inherit;
        color: var(--black);
        background-color: var(--white);
        border: 3px solid blue;
        border: none;
        margin-bottom: 2.8rem;
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
        margin-bottom: 1.6rem;
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

        &:disabled {
          background-color: var(--grey-9);
          color: var(--grey-5);
          cursor: not-allowed;
        }

        &:disabled:active {
          transform: scale(1);
          box-shadow: 0 0 0 var(--shadow);
        }

        @media (max-width: 980px) {
          width: 100%;
          align-self: normal;
        }
      }

      .btnBack {
        text-align: center;
        margin: 0 auto;
        text-transform: uppercase;
        font-size: 1.4rem;
        color: var(--grey-6);
        border-bottom: 2px solid var(--blue-shade-1);
        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--blue-shade-2);
        }
      }
    }
  }
`;

export default ForgotPassword;
