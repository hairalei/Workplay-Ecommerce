import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OrderHistory, ProductNavigation } from '../components';
import { useUserContext } from '../context/userContext';
import { auth } from '../firebase/firebase.config';

function Profile() {
  const { displayName: name, email } = auth.currentUser;
  const { orderHistory, getOrderHistory } = useUserContext();

  useEffect(() => {
    getOrderHistory();
    window.scrollTo(0, 0);
    console.log(orderHistory);
  }, []);

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
          {orderHistory.length < 1 && (
            <div className='center'>
              <h3>No orders yet...</h3>
              <Link to='/products' className='btn'>
                shop our products
              </Link>
            </div>
          )}
          {orderHistory.length >= 1 &&
            orderHistory
              .sort((a, b) => b.orderTimestamp - a.orderTimestamp)
              .map((order, idx) => {
                return <OrderHistory order={order} key={idx} />;
              })}
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
      margin-bottom: 3rem;
      padding: 0 2rem;

      .name {
        text-transform: capitalize;
      }
    }
  }

  .center {
    text-align: center;

    h3 {
      font-size: 3.2rem;
      padding-top: 2rem;
      color: var(--grey-7);
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 600px) {
    .container {
      max-width: 100vw;
      padding: 2rem 1rem;

      .profileInfo {
        padding: 0;
      }
    }
  }
`;

export default Profile;
