import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ProductNavigation, ProductsList, SingleProduct } from '../components';
import useCollection from '../hooks/useCollection';

function Products() {
  // const { data } = useCollection();
  // console.log(data);

  return (
    <Wrapper>
      <ProductNavigation title={'products'} />
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default Products;
