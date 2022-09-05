import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck, FaFilter } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, 'category');
  const companies = getUniqueValues(allProducts, 'company');
  const colors = getUniqueValues(allProducts, 'colors');

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>

          <div className='form-control'>
            <h5>category</h5>
            <div className='categories'>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name='category'
                    type='button'
                    className={category === cat.toLowerCase() ? 'active' : null}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className='form-control'>
            <h5>company</h5>
            <select name='company' value={company} onChange={updateFilters}>
              {companies.sort().map((comp, index) => {
                return (
                  <option key={index} value={comp}>
                    {comp === 'all' ? 'All' : comp}
                  </option>
                );
              })}
            </select>
          </div>

          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {colors.map((col, index) => {
                if (col === 'all')
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={color === 'all' ? 'all-btn active' : 'all-btn'}
                    >
                      all
                    </button>
                  );

                return (
                  <button
                    style={{ background: col }}
                    key={index}
                    data-color={col}
                    name='color'
                    className={color === col ? 'active color-btn' : 'color-btn'}
                    onClick={updateFilters}
                  >
                    {color === col ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>

          <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>

        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.4rem;

    h5 {
      margin: 0.5rem 0;
      text-transform: capitalize;
      font-size: 1.6rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--grey-3);
    border-radius: 5px;
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;

    &:focus-visible {
      border: 3px dotted var(--primary-light);
    }
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 20rem;
    gap: 1rem;
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus-visible {
      border: 3px dotted var(--green-8);
    }

    svg {
      font-size: 0.8rem;
      color: var(--white);
    }
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;

    &:focus-visible {
      border: 3px dotted var(--green-8);
    }
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    gap: 1rem;
    font-size: 1.4rem;
  }
  .clear-btn {
    background: var(--red-1);
    color: var(--white);
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    transition: all 0.4s ease-in-out;
    outline: transparent;
    border: transparent;

    &:hover {
      background: var(--red-2);
    }

    &:focus-visible {
      border: 3px dotted var(--green-8);
    }
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
      width: 200px;
    }
  }
`;

export default Filters;
