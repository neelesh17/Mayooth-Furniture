import { takeLatest, all, call, put, select} from 'redux-saga/effects';
import axios from 'axios';

import UserActionTypes from '../user/user.action-types';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selector';
import CartActionTypes from './cart.actions-types';
import { clearCart, setCartItemsFromDatabase } from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* updateCartInDatabase() {
    const currentUser = yield select(selectCurrentUser);
    console.log("abc",currentUser);
    if (currentUser) {
        try {
          const cartItems = yield select(selectCartItems);
          yield axios({
            url: "/api/cartitems",
            method: "post", 
            data: {
              cartItems: cartItems,
              user: currentUser,
            }
          }).catch(error => {
            throw error;
          });
        } catch (error) {
          console.log(error);
        }
    }
}

export function* checkCartFromDatabase({ payload: user }) {
    const cartItems = yield axios({
                      url:"/api/cartiems",
                      method: "get",
                      params: {
                        userId: user.id
                      }
                    }).then(response => (
                      response.data
                    )).catch(error => {throw error});
    yield put(setCartItemsFromDatabase(cartItems[0].items));
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromDatabase);
  }
  
  export function* onCartChange() {
    yield takeLatest(
      [
        CartActionTypes.ADD_ITEM,
        CartActionTypes.REMOVE_ITEM,
        CartActionTypes.CLEAR_ITEM_FROM_CART
      ],
      updateCartInDatabase
    );
  }

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onUserSignIn),
        call(onCartChange)
    ])
}