import React from 'react';
import styled from 'styled-components';
import { ProductNavigation, ProductsList, SingleProduct } from '../components';

function Products() {
  return (
    <Wrapper>
      <ProductNavigation title={'products'} />
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default Products;
