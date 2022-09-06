import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Hero,
  Features,
  FeatureProducts,
  ProductsSelection,
  Newsletter,
  Loading,
  BackToTop,
} from '../components';

// I just used this to import data to firebase
// import { singleProduct } from '../utils/testData';
// import { db } from '../firebase/firebase.config';
// import { collection, addDoc } from 'firebase/firestore';

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // IGNORE THIS CODE --- for reference only
  // I just used this to import data to firebase
  // DO NOT RUN AGAIN

  // useEffect(() => {
  //   const ref = collection(db, 'products');

  //   singleProduct.forEach(async (product) => {
  //     await addDoc(ref, product);
  //   });
  // }, []);
  // -----end of data import

  useEffect(() => {
    // load component shows when ALL images are not fully loaded
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
      </Wrapper>

      <BackToTop />
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
