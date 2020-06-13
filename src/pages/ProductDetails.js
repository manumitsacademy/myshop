import React, { useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
const ProductDetails = () => {
    var {state:details} = useLocation();
    useEffect(()=>{
        console.log(details)
    })
    return (
        <div>
            <h1>Product Details</h1>
            <img src={details.productImage}></img>
            <b>{details.productName}</b>
            <Link to={{pathname:"/cart",state:details}} className="btn btn-info">Add To Cart</Link>
        </div>
    );
};

export default ProductDetails;