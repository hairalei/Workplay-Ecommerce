import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { useProductsContext } from '../context/productsContext';

function Product({ images, name, price, id, stock }) {
  const { setScrollHeight } = useProductsContext();
  const [height, setHeight] = useState(0);
  const [isOutOfStock, setIsOutOfStock] = useState(true);

  useEffect(() => {
    const scroll = window.addEventListener('scroll', () => {
      setHeight(window.scrollY);
    });

    return () => window.removeEventListener('scroll', scroll);
  }, [height]);

  return (
    <Wrapper>
      <div className='container'>
        <Link
          to={`/products/${id}`}
          className='link'
          onClick={() => setScrollHeight(height)}
        >
          <img src={images[0]} alt={name} />
          <img className='imageHover' src={images[1]} alt={name} />
          <div className={stock === 0 ? 'outOfStock show' : 'outOfStock'}>
            <span>soldout</span>
          </div>
        </Link>
      </div>
      <footer>
        <Link
          to={`/products/${id}`}
          className='link'
          onClick={() => setScrollHeight(height)}
        >
          <h5>{name}</h5>
        </Link>

        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--black);
    border-radius: 1rem;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 1rem;
    transition: all 0.4s ease-in-out;
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
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .link:hover .imageHover {
    visibility: visible;
    opacity: 1;
  }

  .outOfStock {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  .outOfStock.show {
    display: block;
    visibility: visible;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    text-transform: uppercase;
    color: var(--grey-3);

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 500;
      letter-spacing: 1px;
    }
  }

  footer {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5 {
      color: var(--grey-7);
      font-size: 1.6rem;
      letter-spacing: 0.5px;
      transition: all 0.4s ease-in-out;

      &:hover {
        color: var(--purple-4);
      }
    }

    p {
      color: var(--purple-4);
      letter-spacing: 1px;
      font-weight: bold;
    }
  }

  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
`;

export default Product;
