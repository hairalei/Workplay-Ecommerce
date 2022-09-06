import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import {
  ProductNavigation,
  ProductsList,
  Loading,
  Filters,
  Sort,
  BackToTop,
} from '../components';
import { useProductsContext } from '../context/productsContext';
import { FaFilter } from 'react-icons/fa';

function Products() {
  const { isProductsLoading, productsError, scrollHeight } =
    useProductsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, scrollHeight);
  }, []);

  if (productsError) {
    toast.error('Could not load products. Please try again.');
  }

  return (
    <>
      {isProductsLoading && <Loading />}
      <ProductNavigation product />
      <Wrapper>
        <div className='products'>
          <button
            type='button'
            className='filter'
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <FaFilter />
          </button>
          <div className={isModalOpen ? 'show' : ''}>
            <button
              type='button'
              className='close'
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
            <Filters />
          </div>
          <div>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </Wrapper>

      <BackToTop />
    </>
  );
}

const Wrapper = styled.main`
  padding: 0 2rem;
  position: relative;

  .content {
    display: none;
    visibility: hidden;
    opacity: 0;

    width: 100vw;
    height: 100vw;
    z-index: 9;
  }

  .close {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  .show .close {
    display: block;
    visibility: visible;
    opacity: 1;
    z-index: 20;
    color: var(--black);
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    border: transparent;

    @media (max-width: 374px) {
      top: 2rem;
      left: 2rem;
    }
  }

  .show .content {
    display: block;
    padding: 5rem 2rem;
    visibility: visible;
    opacity: 1;
    transform: translateX(0%);
    background-color: var(--blue);
    height: 90vh;
    width: 95vw;

    position: absolute;
    top: 0;
    left: 0;

    form {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 70vh;
      max-height: 90vh;
      max-width: 90vw;

      .colors {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        max-width: 11rem;
        gap: 0.5rem;
      }
    }

    @media (max-width: 374px) {
      padding: 2rem 1rem;
      padding-top: 5rem;

      .color-btn {
        margin-right: 0rem;
      }
    }
  }

  .filter {
    visibility: visible;
    opacity: 1;

    position: absolute;
    top: 3rem;
    left: 8rem;
    background: transparent;
    border: 1px solid var(--black);
    color: var(--black);
    width: 2.5rem;
    border-radius: 5px;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      font-size: 1.6rem;
    }
  }

  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    padding: 0 5rem;

    .products {
      grid-template-columns: 200px 1fr;
    }

    .filter,
    .close {
      display: none;
      visibility: hidden;
      opacity: 0;
    }

    .content {
      display: block;
      visibility: visible;
      opacity: 1;
      width: 200px;
    }
  }
`;

export default Products;
