import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homepageReducer from './homepage/homepage.reducer'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    homepage: homepageReducer,
});

export default persistReducer(persistConfig, rootReducer);