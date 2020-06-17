import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AddProduct from './pages/AddProduct';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import {createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers/Reducer';
import thunk from 'redux-thunk'
import EditProductPage from './pages/EditProductPage';
const store = new createStore(Reducer,applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div className="header fixed-top">
            <Header></Header>
          </div>
          <div className="content">
             <Switch>
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
              <Route path="/editProduct">
                <EditProductPage></EditProductPage>
              </Route>
              <Route path="/cart">
                <Cart></Cart>
              </Route>
             </Switch>
          </div>

          
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;