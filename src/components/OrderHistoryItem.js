import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

function OrderHistoryItem({ item }) {
  const { name, amount, color, image, price, id } = item;
  return (
    <div className='table'>
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className='info'>
        <p className='name'>{name}</p>
        <p className='color'>
          Color : <span style={{ background: color }}></span>
        </p>
        <div className='flex'>
          <p className='amount'>&times;{amount}</p>
          <h5 className='price'>{formatPrice(price)}</h5>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryItem;
