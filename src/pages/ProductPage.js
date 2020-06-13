import React from 'react';
import { Link,Route } from 'react-router-dom'
import AddProduct from './AddProduct';
import ProductsList from './ProductsList';
const ProductPage = () => {
    document.title = 'Products Page';

    return (
        <div className="products-page">
            <div className="title-block">
                <div className="title a_left">
                    <h1>Products Page</h1>
                </div>
                <div className="nesting-router-btns a_right">
                    <Link to="/products/addProduct" className="btn btn-success mr-2">Add Product</Link>
                    <Link to="/products/viewProducts" className="btn btn-primary">View Products</Link>
                </div>
            
            </div>

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