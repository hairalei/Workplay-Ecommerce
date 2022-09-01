import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa';
import AmountButtons from './AmountButtons';
import { useCartContext } from '../context/cartContext';

const AddToCart = ({ singleProduct, id }) => {
  const { addToCart } = useCartContext();
  const { stock, colors } = singleProduct;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    if (amount === stock) return;

    setAmount((currAmount) => currAmount + 1);
  };

  const decrease = () => {
    if (amount === 1) return;

    setAmount((currAmount) => currAmount - 1);
  };

  return (
    <Wrapper>
      <div className='colors'>
        <span>colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                onClick={() => setMainColor(color)}
                key={index}
                style={{ background: color }}
                className={
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
          stock={stock}
        />
        <button
          type='button'
          className='btn'
          onClick={() => {
            addToCart(id, mainColor, amount, singleProduct);
            toast.success('Added to cart!');
          }}
        >
          add to cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
