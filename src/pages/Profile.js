import React, { useEffect } from 'react';
import styled from 'styled-components';
import { OrderHistory, ProductNavigation } from '../components';
import { useUserContext } from '../context/userContext';
import { auth } from '../firebase/firebase.config';

function Profile() {
  const { displayName: name, email } = auth.currentUser;

  return (
    <>
      <Wrapper>
        <ProductNavigation title='My Profile' />
        <div className='container'>
          <h2>My Profile</h2>
          <div className='profileInfo'>
            <p className='name'>Name: {name}</p>
            <p>Email: {email}</p>
          </div>

          <h2>My Order History</h2>
          <OrderHistory key={name} />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding: 0.5rem 0;
  height: 100%;
  min-height: 100vh;
  /* max-height: 100%; */
  background-color: var(--purple-3);

  .container {
    margin: 2rem auto;
    background-color: var(--bg-color);
    max-width: 80vw;
    padding: 2rem;
    height: 100%;
    min-height: 50vh;
    border-radius: 1rem;

    h2 {
      font-size: 2.8rem;
      margin-bottom: 1.4rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.5;
      letter-spacing: 1px;
    }

    .profileInfo {
      margin-bottom: 2rem;
      padding: 0 2rem;

      .name {
        text-transform: capitalize;
      }
    }
  }
`;

export default Profile;
