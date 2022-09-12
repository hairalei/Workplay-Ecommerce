import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import { useProductsContext } from '../context/productsContext';

function ProductNavigation({ title, product, singleCategory }) {
  const {
    updateCategory,
    clearFilters,
    filters: { category },
  } = useFilterContext();
  const { setScrollHeight } = useProductsContext();

  const scrollOnTop = () => {
    setScrollHeight(0);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>/ <span className='margin-right'></span>
          {product && (
            <Link to='/products' onClick={clearFilters}>
              Products /
            </Link>
          )}
          {(product || category !== 'all') && !singleCategory ? (
            <Link
              to='/products'
              onClick={() => {
                scrollOnTop();
                updateCategory(category);
              }}
            >
              {category !== 'all' ? category + ' /' : ''}
            </Link>
          ) : (
            <Link
              to='/products'
              onClick={() => {
                scrollOnTop();
                updateCategory(singleCategory);
              }}
            >
              {singleCategory && singleCategory + ' /'}
            </Link>
          )}
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

  @media (max-width: 1100px) {
    margin-top: 9rem;
    padding-left: 2rem;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding-left: 1rem;

    h3 {
      font-size: 1.6rem;
    }

    a,
    .margin-right {
      margin-right: 0rem;
    }
  }
`;

export default ProductNavigation;
