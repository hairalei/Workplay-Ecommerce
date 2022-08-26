import React from 'react';
import {
  MdGppGood,
  MdOutlineElectricRickshaw,
  MdCardGiftcard,
  MdSecurity,
} from 'react-icons/md';
import styled from 'styled-components';

function Features() {
  return (
    <Wrapper>
      <div className='featureDiv'>
        <MdGppGood className='icon' />
        <div className='featureTextDiv'>
          <h4>Your Most Trusted Store</h4>
          <p>100% All Brand New & Original. Shop with Confidence!</p>
        </div>
      </div>

      <div className='featureDiv'>
        <MdOutlineElectricRickshaw className='icon' />
        <div className='featureTextDiv'>
          <h4>Fast Shipping Nationwide</h4>
          <p>
            Ships in 24 hours! Express and Same-Day Delivery within 50km radius!
          </p>
        </div>
      </div>

      <div className='featureDiv'>
        <MdCardGiftcard className='icon' />
        <div className='featureTextDiv'>
          <h4>Save on Loyalty Rewards</h4>
          <p>Sign in to start earning Loyalty Rewards Points!</p>
        </div>
      </div>

      <div className='featureDiv'>
        <MdSecurity className='icon' />
        <div className='featureTextDiv'>
          <h4>100% Safe and Secure</h4>
          <p>
            All Transactions are Fully Encrypted with State of the Art
            Technology!
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 7rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  background-color: var(--white);
  border-radius: 1rem;

  .featureDiv {
    max-width: 28rem;
  }

  .icon {
    font-size: 3.6rem;
    margin-bottom: 1rem;
  }

  .featureTextDiv {
    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 1100px) {
    gap: 3rem;
  }

  @media (max-width: 950px) {
    flex-wrap: wrap;
    row-gap: 5rem;
  }

  @media (max-width: 400px) {
    padding: 7rem 1rem;
  }
`;

export default Features;
