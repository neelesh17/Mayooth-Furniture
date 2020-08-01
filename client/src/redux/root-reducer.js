import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import productsReducer from './products/products.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: [],
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);