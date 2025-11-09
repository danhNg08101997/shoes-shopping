import {createSlice} from '@reduxjs/toolkit'
import data from './data.json'

const initialState = {
    products: data,
    productDetails: null,
    carts: []
}

const shoppingPhoneSlice = createSlice(
    {
        name: 'shoppingPhone',
        initialState,
        reducers: {}
    }
)

export default shoppingPhoneSlice.reducer