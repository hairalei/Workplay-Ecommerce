import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../context/userContext';
import { formatPrice } from '../utils/helpers';

function OrderHistory() {
  const { orderHistory, getOrderHistory } = useUserContext();

  useEffect(() => {
    getOrderHistory();
  }, []);

  if (orderHistory.length === 0) {
    return (
      <Wrapper>
        <div className='center'>
          <h3>No orders yet...</h3>
          <Link to='/products' className='btn'>
            shop our products
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='container'>
        {orderHistory
          .sort((a, b) => b.orderTimestamp - a.orderTimestamp)
          .map((order, idx) => {
            const { orderID, cart } = order;

            return (
              <>
                <h5>OrderID: {orderID}</h5>
                <h5>Date: Sep 4th 2022, 10:07 pm </h5>
                {cart.map((item, idx) => {
                  const { name, amount, color, image, price } = item;
                  return (
                    <div className='table flex'>
                      <img src={image} alt={name} />
                      <div className='info'>
                        <p>{name}</p>
                        <p className='color'>
                          Color : <span style={{ background: color }}></span>
                        </p>
                        <div className='flex'>
                          <p>&times;{amount}</p>
                          <h5 className='price'>{formatPrice(price)}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 0 2rem;
  width: 100%;

  .center {
    text-align: center;

    h3 {
      font-size: 3.2rem;
      padding-top: 2rem;
      color: var(--grey-7);
      margin-bottom: 1rem;
    }
  }

  .flex {
    display: flex;
  }

  .container {
    h5 {
      font-size: 1.2rem;
      color: var(--grey-6);
    }

    img {
      height: 8rem;
      width: 10rem;
      max-height: 10rem;
      max-width: 10rem;
      display: block;
      border-radius: 1rem;
      object-fit: cover;
    }

    .color {
      color: var(--grey-5);
      font-size: 1.4rem !important;
      letter-spacing: 1px;
      text-transform: capitalize;
      margin-bottom: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      span {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: red;
        margin-left: 0.5rem;
        border-radius: 5px;
      }
    }

    .price-small {
      color: var(--purple-5);
    }
  }
`;

export default OrderHistory;
