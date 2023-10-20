import React, { useState } from 'react';
import Products from './Products';




function ProductList(props) {
  // console.log(props.newProduct);
  // if(props.newProductList.length === 0) return <h3>No Products Available</h3>
  return   props.newProductList.length === 0 ? <h3>No Products Available</h3> :
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
}



export default ProductList;