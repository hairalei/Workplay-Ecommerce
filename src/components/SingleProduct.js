import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductNavigation, ProductImages, Stars, AddToCart } from './';
import { formatPrice } from '../utils/helpers';

import { singleProduct } from '../utils/testData';

function SingleProduct() {
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;

  return (
    <Wrapper>
      <ProductNavigation title={name} product />
      <div className='section section-center'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images} name={name} />

          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available: </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className='info'>
              <span>SKU: </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand: </span>
              {company}
            </p>
            <hr />

            {stock > 0 && <AddToCart singleProduct={singleProduct} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  h2 {
    font-size: 3.6rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    p {
      margin-bottom: 1rem;
    }
  }

  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .price {
    color: var(--purple-5);
    font-size: 2.4rem !important;
  }

  .desc {
    line-height: 2;
    max-width: 45em;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.8rem;
    }
  }
`;

export default SingleProduct;
