import React, { useState } from 'react';
import Products from './Products';




function ProductList(props) {
  // console.log(props.newProduct);
  return <div className=' row'>
    <div className=' col-lg-8 mx-auto'>
      <ul className="list-group shadow">
        {
          props.newProductList.map((products) => {
            return <Products
            key={products?.pID}
              id={products?.pID}
              name={products?.pName}
              description={products?.desc}
              isAvailable={products?.isAvailable}
              imageUrl={products?.image}
              price={products?.price}
            />
          })}

      </ul>
    </div>
  </div>;
}



export default ProductList;