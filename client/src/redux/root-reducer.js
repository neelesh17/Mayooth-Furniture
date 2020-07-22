import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homepageReducer from './homepage/homepage.reducer'
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    homepage: homepageReducer,
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);