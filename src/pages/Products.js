import React from 'react';
import styled from 'styled-components';
import { ProductNavigation, ProductsList, SingleProduct } from '../components';

function Products() {
  return (
    <Wrapper>
      <ProductNavigation />
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default Products;
