const initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            const newProducts = [...action.payload];
            return newProducts;
        default:
            return state;
    }
};

export default productReducer;
