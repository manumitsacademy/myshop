import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { loadProducts, delProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import ProductsDisplay from '../components/ProductsDisplay';
const ProductsList = (props) => {
    document.title = 'Products List'
    const [ minPrice,setMinPrice ] = useState(0);
    const [ maxPrice,setMaxPrice ] = useState(0);
    const maxRange = useRef();
    const [ filteredProducts,setFilteredProducts ] = useState([])
    
    useEffect(()=>{
        props.dispatch(loadProducts());
    },[])

    useEffect(()=>{           
            setFilteredProducts(props.ProductReducer.products)  
    },[props.ProductReducer.products])

    useEffect(()=>{
        if(props.ProductReducer.products){
            props.ProductReducer.products.sort((a,b)=>+a.productPrice<+b.productPrice?-1:1);
            setMinPrice(props.ProductReducer.products[0].productPrice);
            setMaxPrice(props.ProductReducer.products[props.ProductReducer.products.length-1].productPrice);
        }
        
    },[props.ProductReducer.products])
    
    const filterPrice = ()=>{
        
        var fp = filteredProducts.filter((p)=>{
            return +p.productPrice<=+maxRange.current.value?true:false
        })
        console.log("filtered ..",fp)
        setFilteredProducts(fp);
    }

    const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(value);
    const handleAddToCart =  (p)=>{
        props.dispatch(addToCart(p))
    }
    const handleDelProduct = (id)=>{
        props.dispatch(delProduct(id))
    }
    return (
        <div className="fluid">
            <div className="row no-gutters">
            <div className="col-md-3">
                <label for="points">Points (between {minPrice} and {maxPrice}):</label>
                <input type="range" id="vol" name="vol" min={minPrice} max={maxPrice} ref={maxRange} onChange={filterPrice}/>
            </div>
            <div className="col-md-9">
                
                    <ProductsDisplay handleAddToCart={handleAddToCart} handleDelProduct={handleDelProduct} filteredProducts={filteredProducts} numberFormat={numberFormat}>

                    </ProductsDisplay>
                </div>
            
            </div>
            </div>
         
    );
};

export default connect(store=>store)(ProductsList);