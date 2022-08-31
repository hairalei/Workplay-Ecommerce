import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Wrapper>
      <div className='title'>
        <Link to={`/products/${id.slice(0, -color.length)}`}>
          <img src={image} alt={name} />
        </Link>
        <div>
          <Link to={`/products/${id.slice(0, -color.length)}`} className='name'>
            {name}
          </Link>
          <p className='color'>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>

      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button
        className='remove-btn'
        type='button'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }

  display: grid;
  grid-template-columns: 20rem auto auto;
  grid-template-rows: 7.5rem;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;

  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 1rem;
    object-fit: cover;
  }

  h5 {
    font-size: 1.8rem !important;
    margin-bottom: 0.6rem;
  }

  .name:hover {
    color: var(--primary);
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

  .amount-btns {
    width: 75px;

    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }

    h2 {
      font-size: 1.6rem;
    }
  }

  .remove-btn {
    color: var(--white);
    background: transparent;
    border: transparent;
    letter-spacing: 1px;
    background: var(--red-2);
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      opacity: 0.85;
    }
  }

  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--purple-4);
      font-weight: 400;
      font-size: 1.2rem;
    }

    .price-small {
      display: none;
    }

    .price {
      display: block;
      font-size: 1.4rem;
      color: var(--purple-5);
      font-weight: 400;
    }

    .name {
      font-size: 1.4rem;
    }

    .color {
      font-size: 1.4rem;

      span {
        width: 1.4rem;
        height: 1.4rem;
      }
    }

    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;

    img {
      height: 100%;
    }

    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }

    .amount-btns {
      width: 100px;

      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1.4rem;
      }

      h2 {
        font-size: 2.4rem;
      }
    }
  }

  @media (max-width: 380px) {
    grid-template-columns: 20rem auto;

    .remove-btn,
    .amount-btns {
      grid-column: 2/3;
      grid-row: 1/1;
    }

    .remove-btn {
      margin-top: -5rem;
      width: 2.4rem;
      height: 2.4rem;
      font-size: 1rem;
      margin-left: 3rem;
    }

    .amount-btns {
      margin-top: 3rem;
      margin-left: 0rem;
    }
  }
`;

export default CartItem;
