import React, { useState } from 'react';
import './app.css';
import CreateProduct from './Components/CreateProducts/CreateProduct';
import ProductList from './Components/ProductList/ProductList';



function App() {

  let [newProduct, updateProduct] = useState(null)

  function createProduct(product) {
    updateProduct(product);
  }

  return <div>
    <CreateProduct createProduct={createProduct}></CreateProduct>
    <ProductList newProduct={newProduct}></ProductList>
  </div>

}


export default App