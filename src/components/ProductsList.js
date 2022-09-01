import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import { ListView, GridView } from './';

function ProductsList() {
  const { filteredProducts, gridView } = useFilterContext();

  if (filteredProducts.length < 1) {
    return (
      <Wrapper>
        <h2>Sorry, no products matched your search...</h2>
      </Wrapper>
    );
  }

  if (!gridView) {
    return <ListView filteredProducts={filteredProducts} />;
  }

  return <GridView filteredProducts={filteredProducts} />;
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 5rem;
    font-size: 3.2rem;
  }
`;

export default ProductsList;
