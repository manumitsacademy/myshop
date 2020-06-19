
export const addToCart = function(d){
    return (dispatch)=>{
        dispatch({type:'CHANGE_CART_STATUS'})
        setTimeout(()=>{
            dispatch({type:'ADD_TO_CART',payload:d})
        },2000)
    }    
}

