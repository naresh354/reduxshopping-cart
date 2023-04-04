import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        productName: "",
        productPrice: "",
        ProductQuantity: ""
    },
    reducers: {
        setProductName: (state, action) => {
            state.productName = action.payload
        },
        setProductPrice: (state, action) => {
            state.productPrice = action.payload
        },
        setProductQuantity: (state, action) => {
            state.ProductQuantity = action.payload
        }
    }
})

export const { setProductName, setProductPrice, setProductQuantity } = formSlice.actions

export default formSlice.reducer;