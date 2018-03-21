import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList';
import CartList from './components/CarList';

const App = () => {
	return(
		<div>
		<CarList></CarList>
		<ProductList></ProductList>
		</div>
)
}

export default App;

