import React from 'react';
import './app.css';
import Products from './Components/Products';

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
  return <div className=' row'>
    <div className=' col-lg-8 mx-auto'>
    <ul className="list-group shadow">
      <Products
        id={products[0].pID}
        name={products[0].pName}
        description={products[0].desc}
        isAvailable={products[0].isAvailable}
        imageUrl={products[0].image}
        price={products[0].price}
      />
      <Products
        id={products[1].pID}
        name={products[1].pName}
        description={products[1].desc}
        isAvailable={products[1].isAvailable}
        imageUrl={products[1].image}
        price={products[1].price}
      />

      <Products
        id={products[2].pID}
        name={products[2].pName}
        description={products[2].desc}
        isAvailable={products[2].isAvailable}
        imageUrl={products[2].image}
        price={products[2].price}
      />

      <Products
        id={products[3].pID}
        name={products[3].pName}
        description={products[3].desc}
        isAvailable={products[3].isAvailable}
        imageUrl={products[3].image}
        price={products[3].price}
      />

      <Products
        id={products[4].pID}
        name={products[4].pName}
        description={products[4].desc}
        isAvailable={products[4].isAvailable}
        imageUrl={products[4].image}
        price={products[4].price}
      />
      </ul>
    </div>
  </div>
}


export default App