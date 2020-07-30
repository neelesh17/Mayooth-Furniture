import ProductActionTypes from './product.action-types';

export const fetchingItemsStart = () => ({
    type: ProductActionTypes.START_FETCHING_ITEMS_FROM_DATABASE,
});

export const fetchingItemsSuccess = items => ({
    type:ProductActionTypes.FETCHING_ITEMS_FROM_DATABASE_SUCCESS,
    payload: items,
});

export const fetchingItemsFailure = error => ({
    type:ProductActionTypes.FETCHING_ITEMS_FROM_DATABASE_FAILURE,
    payload: error
});