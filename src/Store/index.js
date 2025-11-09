import {configureStore} from '@reduxjs/toolkit'
import shoppingPhoneReducer from '../ShoppingPhoneRedux/slice.js';

const store = configureStore({
    reducer: {
        shoppingPhoneReducer,
    }
})
export default store;