const initialState = {
    produtcts:[],
    loaded:false
}

const ProductReducer = (state=initialState,action)=>{
    if(action.type==='LOAD_PRODUCTS'){
        return {...state,products:action.payload,loaded:true}
    }        
    return state
}
export default ProductReducer;