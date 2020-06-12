import React, { useEffect, useState } from 'react';

const ProductsList = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch("https://api.mlab.com/api/1/databases/abcd/collections/products?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz")
        .then(res=>res.json())
        .then((data)=>{setProducts(data)})
    })
    return (
        <div className="container">
            {
                products.length!=0?(
                    products.map((p)=>{
                        return(
                            <div className="card" style={{"width":"400px"}}>
                                <img className="card-img-top" src={p.productImage} alt="Card image" style={{"width":"100%"}} />
                                <div className="card-body">
                                <h4 className="card-title">{p.productName}</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        )
                    })
                ):(<button class="btn btn-primary">
                <span class="spinner-border spinner-border-sm"></span>
                Loading..
              </button>)
                
            }
            
        </div>
    );
};

export default ProductsList;