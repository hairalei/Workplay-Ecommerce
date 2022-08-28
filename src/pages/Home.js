import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Hero,
  Features,
  FeatureProducts,
  ProductsSelection,
  Newsletter,
  Footer,
  Loading,
} from '../components';

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const timeout = setTimeout(() => setIsLoading(false), 2000);

    // return () => clearInterval(timeout);
    const load = window.addEventListener('load', (event) => {
      setIsLoading(true);
      const images = document.querySelectorAll('img');
      images.forEach((image) => {
        image.complete && image.naturalHeight !== 0
          ? setIsLoading(false)
          : setIsLoading(true);
      });

      return () => window.removeEventListener(load);
    });
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Wrapper>
        <Hero />
        <Features />
        <FeatureProducts />
        <ProductsSelection />
        <Newsletter />
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Home;
