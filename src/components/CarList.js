import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList.js';

const btn = document.getElementById('btnAddToCart');
const dataProductList = document.getElementById('data');

btn.addEventListener('click', function(){
	document.querySelector('.CarList').appendChild(dataProductList);
})

        

export default CarList;
