import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("products") === null
        ? []
        : JSON.parse(localStorage.getItem("products"));

const initialState = {
    value: items,
};

const findIdx = (items, newItem) => {
    const result = items.findIndex(
        (item) =>
            item.id === newItem.id &&
            item.size === newItem.size &&
            item.color === newItem.color,
    );
    return result;
};

const saveToLocalStorage = (value) => {
    localStorage.setItem("products", JSON.stringify(value));
};

const cartItems = createSlice({
    name: "cartItems",
    initialState: initialState,
    reducers: {
        addCartItems: (state, action) => {
            const newItem = action.payload;
            const index = findIdx(state.value, newItem);
            index === -1
                ? state.value.push(newItem)
                : (state.value[index].quantity += newItem.quantity);
            saveToLocalStorage(state.value);
        },

        removeCartItem: (state, action) => {
            const removeItem = action.payload;
            const index = findIdx(state.value, removeItem);
            state.value.splice(index, 1);
            saveToLocalStorage(state.value);
        },

        increaseQuantity: (state, action) => {
            const index = findIdx(state.value, action.payload);
            state.value[index].quantity += 1;
            saveToLocalStorage(state.value);
        },

        decreaseQuantity: (state, action) => {
            const index = findIdx(state.value, action.payload);
            const quantity = state.value[index].quantity - 1;
            if (quantity > 0) {
                state.value[index].quantity = quantity;
            }
            saveToLocalStorage(state.value);
        },
    },
});

export const {
    addCartItems,
    removeCartItem,
    increaseQuantity,
    decreaseQuantity,
} = cartItems.actions;

export default cartItems.reducer;
