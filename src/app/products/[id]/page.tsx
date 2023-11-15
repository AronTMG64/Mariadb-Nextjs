import React from 'react';
import { getProductById } from '@/utils/getProducts';
import { Product } from '../page';

type Params = {
  params: {
    id: string;
  };
};

export default async function productId({params}:Params) {
  const product: Product[] = await getProductById(params.id) as Product[];
  console.log(product);
  return (
    <div>
      productId: {params.id}
      product: {product[0].name}
      <img src={product[0].imgUrl} />
    </div>
  );
};
