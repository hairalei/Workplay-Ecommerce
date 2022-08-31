import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ProductNavigation({ title, product }) {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>/ <span className='margin-right'></span>
          {product && <Link to='/products'>Products /</Link>}
          {title}
        </h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background: var(--purple-1);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  color: var(--blue-shade-5);
  margin-top: 14rem;
  padding-left: 12rem;

  h3 {
    font-size: 3.2rem;
    text-transform: capitalize;
  }

  a {
    color: var(--blue-shade-4);
    opacity: 0.9;
    padding: 0.5rem;
    transition: all 0.4s ease-in-out;
    margin-right: 0.8rem;

    &:hover {
      color: var(--blue-shade-5);
      opacity: 1;
    }
  }

  .margin-right {
    margin-right: 0.8rem;
  }
`;

export default ProductNavigation;
