import React from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Product from './components/Products/Product';

const App = () => {
  return (
    <div className="App">
<Header/>
<Product/>
</div>
  );
}

export default App;
