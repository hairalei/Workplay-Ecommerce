import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { heroImages } from '../utils/imagesData';

function Hero() {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const int = setInterval(() => {
  //     setIndex((prev) => prev + 1);
  //     if (index === 3) setIndex(0);

  //     clearInterval(int);
  //   }, 3000);
  // }, [index]);

  return (
    <Wrapper>
      <div className='imagesDiv'>
        <div className='overlay'></div>
        <img src={heroImages[index]} alt='game controllers' />
      </div>

      <div className='textDiv'>
        <h1>WORK HARD, PLAY HARD</h1>
        <p>
          Your go to multimedia store where your gaming and gadget needs are
          fulfilled.
        </p>
        <Link to='/products' className='btn-shop'>
          Shop now
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  max-height: 100vh;
  width: 100%;

  .overlay {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: -9;
    margin-top: 5rem;
  }

  .imagesDiv img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    margin-top: 5rem;
    z-index: -99;
    position: absolute;
    top: 0;
    left: 0;
  }

  .textDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-family: 'Orbitron';
      font-weight: 900;
      font-size: 4.2rem;
      text-align: center;
      letter-spacing: 0.13em;
      text-transform: uppercase;
      color: var(--white);
      margin-bottom: 2rem;
      width: 100%;
    }

    p {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.8rem;
      text-align: center;
      color: var(--grey-5);
      margin-bottom: 3.2rem;
    }
  }

  .btn-shop {
    text-transform: uppercase;
    background-color: var(--green-7);
    color: var(--white);
    box-shadow: 0 5px 20px var(--shadow);
    width: 20rem;
    text-align: center;
    padding: 1.5rem 3rem;
    border-radius: 2rem;
    font-size: 2.4rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      background-color: var(--white);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2rem;
      transform: translateX(-100%) rotate(45deg);
      animation: btnAnimation 1.7s infinite;
    }
  }
`;

export default Hero;
