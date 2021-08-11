import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
export const selectCartItemsQuantityCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((currentValue, item) => currentValue + item.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((currentValue, item) => currentValue + item.quantity * item.price, 0)
);