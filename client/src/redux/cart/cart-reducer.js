import { CartActionTypes } from './cart.types';
import { mergeCartItemToCart, clearCartItemfromCart, removeCartItemFromCart } from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...currentState,
                hidden: !currentState.hidden
            }
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...currentState,
                cartItems: mergeCartItemToCart(currentState.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...currentState,
                cartItems: clearCartItemfromCart(currentState.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...currentState,
                cartItems: removeCartItemFromCart(currentState.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...currentState,
                cartItems: []
            }
        case CartActionTypes.SET_CART_FROM_FIREBASE:
            return {
                ...currentState,
                cartItems: action.payload
            };
        default:
            return currentState
    }
}
export default cartReducer;