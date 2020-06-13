import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AddProduct from './pages/AddProduct';
import ProductsList from './pages/ProductsList';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Route exact path="/">
          <ProductsList></ProductsList>
        </Route>
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
