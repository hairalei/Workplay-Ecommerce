import React from 'react';
import styled from 'styled-components';
import {
  Hero,
  Features,
  FeatureProducts,
  ProductsSelection,
  Newsletter,
  Footer,
} from '../components';

function Home() {
  return (
    <Wrapper>
      <Hero />
      <Features />
      <FeatureProducts />
      <ProductsSelection />
      <Newsletter />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Home;
