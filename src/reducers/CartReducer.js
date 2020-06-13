const CartReducer = (state=[],action)=>{
    if(action.type==='ADD_TO_CART'){
        console.log("Add to cart reducer action",[...state,action.payload]  )
        return [...state,action.payload]
    }
    return state
}
export default CartReducer