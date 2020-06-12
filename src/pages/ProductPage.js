import React from 'react';
import { Link,Route } from 'react-router-dom'
import AddProduct from './AddProduct';
import ProductsList from './ProductsList';
const ProductPage = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <Link to="/products/addProduct">Add Product</Link>
            <Link to="/products/viewProducts">View Products</Link>
            <Route path="/products/addProduct">
                <AddProduct></AddProduct>
            </Route>
            <Route path="/products/viewProducts">
                <ProductsList></ProductsList>
            </Route>
        </div>
    );
};

export default ProductPage;