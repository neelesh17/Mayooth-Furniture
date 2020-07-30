import { takeLatest, all, call, put, select} from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';
import UserActionTypes from '../user/user.action.types';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selector';
import CartActionTypes from './cart.action.types'
import { clearCart, setCartItemsFromDatabase } from './carts.actions';
import { response } from 'express';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* updateCartInDatabase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
        try {
          const cartRef = yield getUserCartRef(currentUser.id);
          const cartItems = yield select(selectCartItems);
          yield cartRef.update({ cartItems });
        } catch (error) {
          console.log(error);
        }
    }
}

export function* checkCartFromDatabase({ payload: user }) {
    const cartItems = yield axios({
                          url:"api/getcartiems",
                          method: "get",
                          data: {
                            user: user
                          }
                        }).then(response => (
                          response
                        )).catch(error => {throw error});
    console.log(cartItems);
    yield put(setCartItemsFromDatabase(cartItems));
}

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