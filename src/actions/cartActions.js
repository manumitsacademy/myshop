export function addToCart(details){
    return function(dispatch){
        dispatch({type:'CHANGE_CART_STATUS'})
        setTimeout(()=>{
            dispatch({type:'ADD_TO_CART',payload:details})
        },2000)
    }
}