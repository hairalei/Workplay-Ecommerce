import React from 'react';
import styled from 'styled-components';
import aboutImg from '../assets/play.jpg';

function About() {
  return (
    <Wrapper>
      <div className='imgDiv'>
        <img src={aboutImg} alt='play' />
      </div>

      <div className='aboutDiv'>
        <h1>About Us</h1>
        <p>
          Founded in 2020 where pandemic started to hit the world. We realized
          that we all work hard just to die. We often forget to relax and
          achieve the work-life balance. Life is too short to work all day and
          die early. Recreation is important in our daily lives and make us live
          longer. We founded this e-commerce business to help us remember that
          life is not all about working and earning money. It's also about
          playing and spending your hard earned money. We have 500+ branches all
          around the globe and offer deliveries. Let's always remember to WORK
          hard and PLAY hard!
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  gap: 6.4rem;
  padding-top: 14rem;
  min-height: 100vh;
  background-color: var(--purple-5);
  color: var(--grey-1);

  .imgDiv {
    width: 55rem;
    height: 55rem;
  }

  .imgDiv img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  h1 {
    font-size: 4.8rem;
    margin-bottom: 3.2rem;
    position: relative;
  }

  h1:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 10rem;
    height: 0.5rem;
    background-color: var(--primary);
  }

  p {
    max-width: 60rem;
    line-height: 1.8;
  }

  @media (max-width: 1100px) {
    padding-top: 10rem;
  }

  @media (max-width: 850px) {
    gap: 3rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 5rem 0;
    padding-top: 9rem;

    .imgDiv {
      width: 100vw;
      max-height: 50vh;

      & img {
        object-position: 40% 20%;
      }
    }

    h1 {
      font-size: 3.2rem;
    }

    p {
      word-wrap: break-word;
      line-height: 1.6;
      font-size: 1.4rem;
    }
  }
`;

export default About;
