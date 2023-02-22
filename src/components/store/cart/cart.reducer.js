import { createSlice } from "@reduxjs/toolkit";

//Helper function
const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeItemCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

}



const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

// //action function
// export const addItemToCart = (productToAdd, cartItems) => {
//     const newCartItems = addCartItem(cartItems, productToAdd)
//     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
// }

// export const removeItemFromCart = (cartItemToRemove, cartItems) => {
//     const newCartItems = removeItemCart(cartItems, cartItemToRemove)
//     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
// }

// export const clearItemFromCart = (cartItemToClear, cartItems) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear)
//     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
// }

// export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeItemCart(state.cartItems, action.payload);
        },
        clearItemFromCart(state, action) {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
        }
    }
})


// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//     const { type, payload } = action;

//     switch (type) {
//         case CART_ACTION_TYPES.SET_CART_ITEMS:
//             return {
//                 ...state,
//                 cartItems: payload,
//             }

//         case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//             return {
//                 ...state,
//                 isCartOpen: payload
//             }

//         default:
//             return state;
//     }
// }

export const { addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;