import React from 'react';
import ReactDOM from 'react-dom';
import Data from './../../data/mock';


const ProductList = () => {
  return (
    Data.catalog.map((Product) => 
      <div id="data" className="classData" key={Product.id}>
        <img src= {Product.imageURL}/>
      <div className="classDetail">
        <p className="name">{Product.name}</p>
        <p className="price">{Product.currency}{Product.price}</p>
        <button id="btnAddToCart" className="addToCart">Add to cart</button>
      </div>
      </div>
       
    )
  )
}

const CarList = () =>(
  <div className='CarList'>
  </div>
)



export default ProductList;