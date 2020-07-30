import ProductActionTypes from './product.action-types';

const INITIAL_STATE = {
    items: [], 
    error: null
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ProductActionTypes.FETCHING_ITEMS_FROM_DATABASE_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        case ProductActionTypes.FETCHING_ITEMS_FROM_DATABASE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
} 

export default productsReducer