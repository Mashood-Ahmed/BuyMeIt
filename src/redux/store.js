import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cartReducer';

import sessionStorage from 'redux-persist/es/storage/session';
import {persistReducer} from 'redux-persist';
import { combineReducers } from "redux";
import wlistReducer from "./reducers/wlistReducer";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: sessionStorage,
};

const reducer = combineReducers({
    cart: cartReducer,
    wishList: wlistReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
});


// export default configureStore({
//     reducer:{
//         cart: cartReducer,
//     }
// });