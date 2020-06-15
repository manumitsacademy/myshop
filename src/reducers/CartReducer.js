const cart = {
    products:[],
    cartStatus:true
}
const CartReducer = (state=cart,action)=>{
    if(action.type==='ADD_TO_CART'){       
        return {...state,products:[...state.products,action.payload],cartStatus:!state.cartStatus}
    }
    if(action.type==='CHANGE_CART_STATUS'){
        return {...state,cartStatus:!state.cartStatus}
    }
    return state
}
export default CartReducer