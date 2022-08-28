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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum,
          facilis perspiciatis magnam quisquam ad! Labore accusantium illo fugit
          praesentium cum reprehenderit incidunt voluptatem, maiores excepturi
          explicabo aliquam non facere distinctio totam eveniet consequatur.
          Eveniet iusto eum nam est minima ipsum laborum. Voluptas, ducimus!
          Blanditiis tempore ex earum voluptatum distinctio. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Eveniet quaerat dolor nobis
          veniam culpa aliquam obcaecati velit recusandae molestiae expedita!
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
    gap: 4rem;
  }

  @media (max-width: 700px) {
    gap: 3rem;
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
