import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    color: #ffb900;
    font-size: 1.6rem;
    margin-right: 1rem;
  }

  p {
    margin-left: 1rem;
    margin-bottom: 0;
  }
`;
export default Stars;
