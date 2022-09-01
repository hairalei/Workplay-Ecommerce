import React, { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import {
  ProductNavigation,
  ProductsList,
  SingleProduct,
  Loading,
} from '../components';
import useCollection from '../hooks/useCollection';
import { useProductsContext } from '../context/productsContext';

function Products() {
  // const { data } = useCollection();
  // console.log(data);

  const { products, isProductsLoading, productsError } = useProductsContext();

  if (productsError) {
    toast.error('Could not load products. Please try again.');
  }

  return (
    <Wrapper>
      {isProductsLoading && <Loading />}
      <ProductNavigation title={'products'} />
      <ProductsList />
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default Products;
