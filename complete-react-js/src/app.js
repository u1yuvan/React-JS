import React from 'react';
import './app.css';
import CreateProduct from './Components/CreateProducts/CreateProduct';
import ProductList from './Components/ProductList/ProductList';



function App() {
  return <div>
    <CreateProduct></CreateProduct>
    <ProductList></ProductList>
  </div>

}


export default App