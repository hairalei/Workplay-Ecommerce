import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc, getDoc } from 'firebase/firestore';
import { IoEye, IoEyeOff, IoMail, IoMailOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import Loading from './Loading';
import { useUserContext } from '../context/userContext';

function Form() {
  const title = useLocation().pathname.slice(1);
  const navigate = useNavigate('/');
  const { setCurrentUser } = useUserContext();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const { fullname, email, password } = formData;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: fullname,
      });

      const formDataCopy = { ...formData, uid: user.uid };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);

      setCurrentUser(email);
      toast.success('Success! Email created.');
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      setError('Sorry, we could not find your account.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        setCurrentUser(email);
        setIsLoading(false);
        navigate('/');
      }
    } catch (error) {
      setIsLoading(false);
      setError('Incorrect email/password. Try again.');
    }
  };

  const onGoogleClick = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName,
          email: user.email,
        });
        setCurrentUser(user.email);
      }
      setIsLoading(false);
      setCurrentUser(user.email);
      navigate('/');
    } catch (error) {
      toast.error('Could not authorize with Google');
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      {isLoading && <Loading />}
      <div className='container'>
        <h1 className='heading'>{title}</h1>
        <form
          className='form'
          onSubmit={title === 'signup' ? handleSignup : handleLogin}
        >
          {title === 'signup' && (
            <>
              <label htmlFor='fullname'>full name</label>
              <input
                type='text'
                id='fullname'
                placeholder='Joey Tribbiani'
                onChange={handleOnChange}
                value={fullname}
              />
            </>
          )}
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            placeholder='joeytribbiani@mail.com'
            onChange={handleOnChange}
            value={email}
          />
          <label htmlFor='password'>password</label>
          <div className='passwordDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Password'
              onChange={handleOnChange}
              value={password}
            />
            <button
              className='eye'
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </button>
          </div>

          {title === 'login' && (
            <Link to='/forgot-password' className='forgotpw'>
              Forgot password
            </Link>
          )}

          <span className={error ? 'show error' : 'error'}>{error}</span>
          <button
            className='btnSubmit'
            type='submit'
            onSubmit={title === 'signup' ? handleSignup : handleLogin}
          >
            <IoMailOutline className='icon' /> {title} with Email
          </button>
          <button className='btnSubmit' type='button' onClick={onGoogleClick}>
            <FcGoogle className='icon' /> {title} with Google
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
  padding: 5rem 0;
  height: 100%;
  min-height: 100vh;
  max-height: 150vh;
  background-color: var(--purple-5);

  .heading {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  .container {
    margin: 1rem auto;
    margin-top: 8rem;
    max-width: 40vw;
    width: 100%;
    background-color: var(--purple-1);
    padding: 3rem 4rem;
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

      & .forgotpw {
        text-transform: capitalize;
        color: var(--blue-shade-3);
        opacity: 0.7;
        font-weight: bold;
        margin-top: -1rem;
        margin-bottom: 1rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }

      & .error {
        font-size: 1.6rem;
        height: 1.6rem;
        font-weight: bold;
        color: var(--red-2);
        margin-bottom: 1rem;
        opacity: 0;
        visibility: hidden;
      }

      & .error.show {
        opacity: 1;
        visibility: visible;
      }

      & .btnSubmit {
        align-self: center;
        width: 70%;
        text-transform: uppercase;
        font-family: inherit;
        font-size: 1.6rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: none;
        color: inherit;
        color: var(--grey-8);
        background-color: var(--blue);
        box-shadow: 0 0.5rem 1rem var(--shadow);
        margin-bottom: 1.2rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        & .icon {
          font-size: 2.4rem;
          margin-right: 0.6rem;
        }

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

    .passwordDiv {
      position: relative;
      width: 100%;
    }

    .eye {
      position: absolute;
      right: 0.8rem;
      top: 10%;
      background-color: transparent;
      border: none;
      font-size: 2.8rem;
      cursor: pointer;
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

  @media (max-width: 1100px) {
    .container {
      padding: 3rem;
      max-width: 60vw;
      margin-top: 3.2rem;
    }
  }

  @media (max-width: 600px) {
    .heading {
      font-size: 3.2rem;
      margin-bottom: 1.6rem;
    }
    .container {
      padding: 2rem;
      max-width: 95%;

      .form {
        label {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        input {
          margin-bottom: 1.6rem;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Form;
