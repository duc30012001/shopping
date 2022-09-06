import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

const products = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.value = [...action.payload];
        },
    },
});

export const { setProducts } = products.actions;
export default products.reducer;
