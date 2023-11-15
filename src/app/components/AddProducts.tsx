'use client'

import React, { useState } from 'react'

export default function AddProducts() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  async function addProduct(name: string, price: string, stock: string, imgUrl: string) {
    await fetch("/api/product", {method: "POST", body: JSON.stringify({name, price, stock, imgUrl})});
  };

  return (
    <form className="flex flex-col p-10">
      <label htmlFor="name">Name</label>
      <input value={name} onChange={e => setName(e.target.value)} type="text" />
      <label htmlFor="price">Price</label>
      <input value={price} onChange={e => setPrice(e.target.value)} type="text" />
      <label htmlFor="stock">Stock</label>
      <input value={stock} onChange={e => setStock(e.target.value)} type="text" />
      <label htmlFor="imgUrl">Upload image</label>
      <input value={imgUrl} onChange={e => setImgUrl(e.target.value)} type="text" />
      <button onClick={() => addProduct(name, price, stock, imgUrl)} className="button bg-stone-900 text-slate-50 mt-2 p-3">Send</button>
    </form>
  );
};
