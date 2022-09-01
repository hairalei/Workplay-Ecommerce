import React from 'react';
import { useFilterContext } from '../context/filterContext';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import styled from 'styled-components';

const Sort = () => {
  const {
    filteredProducts,
    gridView,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={gridView ? 'active' : null}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={!gridView ? 'active' : null}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>

      <p>{filteredProducts.length} products found</p>
      <hr />

      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;

    .btn-container {
      width: 50px;
    }

    label {
      display: inline-block;
      margin-right: 0.5rem;
    }

    p {
      margin-left: 0rem !important;
    }
  }

  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
    margin-left: 2rem;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;

    button {
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
    .active {
      background: var(--black);
      color: var(--white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1.4rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    color: var(--grey-7);
  }

  label {
    font-size: 1.4rem;
    text-transform: capitalize;
    color: var(--grey-6);
    margin-right: 1rem;
  }
`;

export default Sort;
