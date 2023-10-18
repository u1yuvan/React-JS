import React, { useState } from 'react';
import './app.css';
import CreateProduct from './Components/CreateProducts/CreateProduct';
import ProductList from './Components/ProductList/ProductList';

const products = [
  {
    pID: 1,
    pName: 'Fresh Milk',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: 'images/pngegg (1).png',
    price: 35
  },
  {
    pID: 2,
    pName: 'Orange Juice',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: "images/pngegg (2).png",
    price: 50
  },
  {
    pID: 3,
    pName: 'Pringles',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: "images/pngegg (3).png",
    price: 100
  },
  {
    pID: 4,
    pName: 'Olive oil',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: "images/pngegg (4).png",
    price: 450
  },
  {
    pID: 5,
    pName: 'Curd',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: "images/pngegg.png",
    price: 20
  }

]


function App() {
   let [newProductList, updateProductList] = useState(products)

  function createProduct(product) {
    updateProductList([product, ...newProductList]);
  }

  return <div>
    <CreateProduct createProduct={createProduct}></CreateProduct>
    <ProductList  newProductList={newProductList}></ProductList>
  </div>

}


export default App