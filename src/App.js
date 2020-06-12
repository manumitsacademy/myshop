import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AddProduct from './pages/AddProduct';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Route path="/products">
          <ProductPage></ProductPage>
        </Route>
        <Route path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
