import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import { productsImages } from '../utils/imagesData';

function ProductsSelection() {
  const textRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const { updateCategory } = useFilterContext();

  return (
    <Wrapper>
      <h2>Products Selection</h2>
      <div className='imagesDiv'>
        {productsImages.map((image, idx) => {
          const { name, url } = image;
          return (
            <Link to='/products' key={idx}>
              <div
                className={isHover ? 'imageBox show' : 'imageBox'}
                ref={textRef}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => updateCategory(name)}
              >
                <img src={url} alt={name} />
                <span>{name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20rem 0;

  h2 {
    font-size: 3.6rem;
    padding: 0 12rem;
    align-self: start;
    position: relative;
    margin-bottom: 5.2rem;
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

  .imagesDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100rem;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .imageBox {
    height: 30rem;
    width: 30rem;
    overflow: hidden;
    position: relative;
  }

  .imageBox span {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--grey-2);
    background-color: rgba(55, 65, 81, 0.7);
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  .imageBox.show span {
    display: block;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 1.5s linear;
  }

  .imageBox:hover img {
    transform: scale(1.3);
  }

  @media (max-width: 700px) {
    h2 {
      padding: 0 5rem;
      font-size: 2.8rem;

      &:after {
        left: 5rem;
      }
    }

    .imageBox {
      height: 20rem;
      width: 20rem;
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
`;

export default ProductsSelection;
