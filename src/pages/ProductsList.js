import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ProductsList = () => {
    document.title = 'Products List'

    const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(value);

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch("https://api.mlab.com/api/1/databases/abcd/collections/products?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz")
        .then(res=>res.json())
        .then((data)=>{setProducts(data)})
        
    })
    return (
        <div className="container">
            <div className="row">
            {
                products.length!==0?(
                    products.map((p)=>{
                        return(
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={p._id.$oid}>
                                <div className="card">
                                    <img className="card-img-top" src={p.productImage} alt={p.productName} />
                                    <div className="card-body">
                                    <h4 className="card-title" title={p.productName}>{p.productName}</h4>
                                    <p className="product-price">{numberFormat(p.productPrice)}/-</p>
                                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <Link to={{pathname:"/productDetails",state:p}} className="btn btn-primary btn-sm">View More</Link>
                                    <div className="product-actions">
                                          <ul>
                                            <li title="Add to Cart"><i className="fas fa-cart-plus"></i></li>
                                            <li title="Add to Favorites"><i className="fas fa-heart"></i></li>
                                            <li title="View Details"><i className="fas fa-eye"></i></li>
                                            <li title="Add to Compare"><i className="fas fa-sync-alt"></i></li>
                                          </ul>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ):(<button className="btn btn-primary">
                <span className="spinner-border spinner-border-sm"></span>
                Loading..
              </button>)
                
            }
            </div>
            
        </div>
    );
};

export default ProductsList;