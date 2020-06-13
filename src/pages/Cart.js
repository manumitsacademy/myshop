import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
const Cart = (props) => {
    const { state:details} = useLocation()
    useEffect(()=>{
        props.dispatch({type:'ADD_TO_CART',payload:details})
    },[])
    
    return (
        <div>
            <h1>Cart</h1>
            {
                props.CartReducer.map((p)=>{
                    return(
                        <h2>{p.productName}</h2>
                    )
                })
            }
        </div>
    );
};
function mapStateToProps(store){
    console.log(store)
    return store
}
export default connect(mapStateToProps)(Cart);