import { takeLatest, all, call, put} from 'redux-saga/effects';
import axios from 'axios';

import ProductActionTypes from './product.action-types';
import {fetchingItemsSuccess, fetchingItemsFailure} from './product.actions';

export function* getItemsFrromDatabase(){
    try{
        const productItems = yield axios({
            url: "api/getproducts",
            method:"get",
        }).then(response => {
            return response.data;
        }).catch(error => {
            throw error;
        });
        yield put(fetchingItemsSuccess(productItems));
    } catch(error){
        yield put(fetchingItemsFailure(error));
    }
}

export function* onFetchingItemsStart() {
    yield takeLatest(ProductActionTypes.START_FETCHING_ITEMS_FROM_DATABASE, getItemsFrromDatabase);
  }

export function* productSagas() {
    yield all([
        call(onFetchingItemsStart)
    ])
}