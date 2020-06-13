import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AddProduct from './pages/AddProduct';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import {createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers/Reducer';
const store = new createStore(Reducer)
function App() {
  return (
    <Provider store={store}>
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
          <Route path="/productDetails">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
