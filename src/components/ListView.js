import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const ListView = ({ filteredProducts }) => {
  return (
    <Wrapper>
      {filteredProducts.map((product) => {
        const { id, images, name, price, description } = product;

        return (
          <article key={id}>
            <Link to={`/products/${id}`} className='link'>
              <img src={images[0]} alt={name} />
              <img className='imageHover' src={images[1]} alt={name} />
            </Link>
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  .link {
    position: relative;

    &:focus-visible,
    &:focus {
      outline: 2px dashed var(--purple-3) inset;
    }
  }

  .imageHover {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 200px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .link:hover .imageHover {
    visibility: visible;
    opacity: 1;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: var(--grey-7);
  }
  .price {
    color: var(--purple-4);
    margin-bottom: 0.75rem;
    font-size: 1.8rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
    color: var(--grey-7);
  }
  .btn {
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
