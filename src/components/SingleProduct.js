import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import {
  ProductNavigation,
  ProductImages,
  Stars,
  AddToCart,
  Loading,
} from './';
import { formatPrice } from '../utils/helpers';
import { useProductsContext } from '../context/productsContext';

function SingleProduct() {
  const {
    fetchSingleProduct,
    singleProduct,
    isProductsLoading,
    productsError,
  } = useProductsContext();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(id);
    console.log('fetching');
  }, [id]);

  useEffect(() => {
    if (productsError) {
      toast.error('Could not find product. Please try again.');

      setTimeout(() => navigate('/products'), 3000);
    }
  }, [productsError]);

  if (isProductsLoading) {
    return <Loading />;
  } else {
    const { name, price, description, stock, stars, reviews, company, images } =
      singleProduct;

    return (
      <Wrapper>
        <ProductNavigation title={name} product />
        <div className='section section-center'>
          <Link to='/products' className='btn'>
            back to products
          </Link>
          <div className='product-center'>
            <ProductImages images={images || ['']} name={name} />

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
                {id}
              </p>
              <p className='info'>
                <span>Brand: </span>
                {company}
              </p>
              <hr />

              {stock > 0 && <AddToCart singleProduct={singleProduct} id={id} />}
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.main`
  h2 {
    font-size: 3.6rem;
    margin-bottom: -1rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
    margin-top: 1rem;
  }

  .price {
    color: var(--purple-5);
    font-size: 2.4rem !important;
    margin-top: -1rem;
  }

  .desc {
    line-height: 1.7;
    max-width: 45em;
    color: var(--grey-7);
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    color: var(--grey-7);

    span {
      font-weight: 700;
      color: var(--grey-8);
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      margin-top: 1rem;
    }

    .price {
      font-size: 1.8rem;
    }
  }
`;

export default SingleProduct;
