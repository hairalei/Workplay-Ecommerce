import React, { useEffect, useState } from 'react';
import { singleProduct } from '../utils/testData';
import { db } from '../firebase/firebase.config';
import { collection, addDoc } from 'firebase/firestore';

function useCollection() {
  const [data, setData] = useState([...singleProduct]);

  useEffect(() => {
    const ref = collection(db, 'products');

    data.forEach(async (product) => {
      await addDoc(ref, product);
    });
  });

  return { data };
}

export default useCollection;
