import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartItemsReducer from "./cartItemsSlice";

const rootReducer = {
    products: productsReducer,
    cartItems: cartItemsReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
