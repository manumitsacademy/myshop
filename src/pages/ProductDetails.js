import React from 'react';
import { connect } from 'react-redux'
import { useLocation,Link } from 'react-router-dom';
const ProductDetails = (props) => {
    var {state:details} = useLocation();
    console.log(props)
    return (
        <div className="container-fluid p-0">
            <div className="title-block">
                <div className="title a_left">
                <h1>Product Details</h1>
                </div>
                <div className="nesting-router-btns a_right">
                    <Link to="/products/addProduct" className="btn btn-success mr-2">Add Product</Link>
                    <Link to="/products/viewProducts" className="btn btn-primary">View Products</Link>
                </div>
            
            </div>
            
            <div className="container mb-4">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="pd-image">
                            <img className="img-thumbnail" src={details.productImage}  alt={details.productName}/>
                        </div>
                        {
                            props.CartReducer.cartStatus?
                            (<div className="pd-actions">
                            <button className="btn btn-info mr-2" onClick={()=>{props.handleAddToCart(details)}}>Add To Cart</button>
                                <Link to={{pathname:"/checkout",state:details}} className="btn btn-secondary">Buy Now</Link>
                            </div>):
                            (
                                <h1>Please Wait!!!...</h1>
                            )
                        }
                        
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="pd-details">
                            <h4>{details.productName}</h4>
                            <p className="pd-price"><span><img src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements-26/512/1012_price_tag_label_ticket-512.png" alt="Price Tag"/></span>Rs. {details.productPrice}/-</p>
                            <p className="pd-description">{details.productDescription}</p>
                            <ul className="pd-more">
                                <li><b>Brand : </b> <span>{details.productBrand}</span></li>
                                <li><b>Available Stock : </b> <span>{details.productQuantity}</span></li>
                                <li><b>Color : </b> <span>{details.productColor}</span></li>
                                <li><b>Size : </b> <span>{details.productSize}</span></li>
                                <li><b>Category : </b> <span>{details.productCategory}</span></li>
                                <li><b>Sub Category : </b> <span>{details.productSubCategory}</span></li>
                                <li><b>Product Supplier : </b> <span>{details.productSupplier}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
function mapStateToProps(store){
    return store
}
function mapDispatchToProps(dispatch){
    return {
        handleAddToCart:function(d){
            dispatch({type:'CHANGE_CART_STATUS'})
            setTimeout(()=>{
                dispatch({type:'ADD_TO_CART',payload:d})
            },2000)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);