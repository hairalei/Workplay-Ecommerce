import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ amount, increase, decrease, stock }) => {
  return (
    <Wrapper className='amount-btns'>
      <button className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
      <span className='limited'>{stock <= 5 && `${stock} items left!`}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  h2 {
    margin-bottom: 0;
  }

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .limited {
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--red-2);
    grid-column: 1/4;
    animation: limitedAnim 0.7s ease-in-out alternate infinite running;

    @keyframes limitedAnim {
      from {
        transform: scale(0.98);
      }
      to {
        transform: scale(1.05);
      }
    }
  }
`;

export default AmountButtons;
