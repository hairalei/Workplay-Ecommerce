import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { featuredConsoles } from '../utils/imagesData';

function FeatureProducts() {
  const containerRef = useRef(null);

  const scrollOnTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <h2>Featured Gaming Consoles</h2>
      <div className='underline'></div>
      <div className='container' ref={containerRef}>
        <div
          className='split left'
          onMouseEnter={() => containerRef.current.classList.add('hover-left')}
          onMouseLeave={() =>
            containerRef.current.classList.remove('hover-left')
          }
        >
          <h1>Playstation 5</h1>
          <Link
            to='/products/MBRcqMV1FnJK2X6j4oub'
            className='btnFeatured'
            onClick={scrollOnTop}
          >
            Buy Now
          </Link>
        </div>
        <div
          className='split right'
          onMouseEnter={() => containerRef.current.classList.add('hover-right')}
          onMouseLeave={() =>
            containerRef.current.classList.remove('hover-right')
          }
        >
          <h1>XBox Series X</h1>
          <Link
            to='/products/N7cDUkuzbxTnNhHUHHnV'
            className='btnFeatured'
            onClick={scrollOnTop}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 4.8rem 0;
  margin-top: 0;
  z-index: 0;

  h2 {
    padding-left: 12rem;
    font-size: 3.6rem;
    margin-bottom: 5.2rem;
    position: relative;
  }

  h2:after {
    content: '';
    position: absolute;
    left: 12rem;
    bottom: -1rem;
    width: 10rem;
    height: 0.5rem;
    background-color: var(--primary);
  }

  @media (max-width: 700px) {
    h2 {
      padding: 0 5rem;
      font-size: 2.8rem;

      &:after {
        left: 5rem;
      }
    }
  }

  @media (max-width: 350px) {
    h2 {
      padding: 0 2rem;
      font-size: 2.4rem;

      &:after {
        left: 2rem;
      }
    }
  }

  h1 {
    font-size: 4.8rem;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    white-space: nowrap;
  }

  .btnFeatured {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    text-decoration: none;
    color: #fff;
    border: #fff solid 0.2rem;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    width: 15rem;
    padding: 1.5rem;
  }

  .split.left .btnFeatured:hover {
    background-color: var(--left-btn-hover-color);
    border-color: var(--left-btn-hover-color);
  }

  .split.right .btnFeatured:hover {
    background-color: var(--right-btn-hover-color);
    border-color: var(--right-btn-hover-color);
  }

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background: #333;
  }

  .split {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }

  .split.left {
    left: 0;
    background: url(${featuredConsoles[0]});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .split.left::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--left-bg-color);
  }

  .split.right {
    right: 0;
    background: url(${featuredConsoles[1]});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .split.right::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--right-bg-color);
  }

  .split.right,
  .split.left,
  .split.right::before,
  .split.left::before {
    transition: all var(--speed) ease-in-out;
  }

  .hover-left .left {
    width: var(--hover-width);
  }

  .hover-left .right {
    width: var(--other-width);
  }

  .hover-right .right {
    width: var(--hover-width);
  }

  .hover-right .left {
    width: var(--other-width);
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
      top: 30%;
    }

    .btnFeatured {
      padding: 1.2rem;
      width: 12rem;
    }
  }
`;

export default FeatureProducts;
