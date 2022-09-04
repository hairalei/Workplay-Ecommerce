import React from 'react';
import styled from 'styled-components';
import OrderHistoryItem from './OrderHistoryItem';

function OrderHistory({ order }) {
  const { orderID, cart, date, totalPrice } = order;

  return (
    <Wrapper>
      <div className='orderContainer'>
        <h5>OrderID: {orderID}</h5>
        <h5>Date: {date} </h5>
        {cart.map((item, idx) => {
          return <OrderHistoryItem item={item} key={idx} />;
        })}
        <p className='totalPrice'>Total Price: ${totalPrice}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 0 2rem;
  width: 100%;

  .orderContainer {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey-4);

    h5 {
      font-size: 1.6rem;
      color: var(--grey-6);
    }

    img {
      height: 10rem;
      width: 14rem;
      max-height: 10rem;
      max-width: 14rem;
      display: block;
      border-radius: 1rem;
      object-fit: cover;
      margin-right: 3rem;
    }

    .name {
      font-size: 1.6rem;
      line-height: 1.3;
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
        width: 1.4rem;
        height: 1.4rem;
        background: red;
        margin-left: 0.5rem;
        border-radius: 50px;
      }
    }

    .table {
      margin: 2rem 0;
      display: flex;
      align-items: center;

      .price {
        color: var(--purple-5);
        font-size: 1.6rem;
      }

      .flex {
        display: flex;
        align-items: center;
        gap: 5rem;
      }
    }
  }

  @media (max-width: 780px) {
    .orderContainer {
      padding-bottom: 2rem;
      margin-bottom: 2rem;

      h5 {
        font-size: 1.2rem;
        color: var(--grey-6);
      }

      img {
        height: 8rem;
        width: 10rem;
        margin-right: 1rem;
      }

      .name {
        font-size: 1.4rem;
      }

      .color {
        font-size: 1.4rem !important;
        margin-bottom: 0.3rem;

        span {
          width: 1rem;
          height: 1rem;
          background: red;
          margin-left: 0.5rem;
        }
      }

      .table {
        margin: 1rem 0;

        .price {
          font-size: 1.6rem;
        }

        .flex {
          gap: 3rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export default OrderHistory;
