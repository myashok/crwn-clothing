import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { clearCart, setCartFromFirebase } from './cart.actions';
import UserActionTypes from '../user/user.types';
import { CartActionTypes } from './cart.types';
import { getUserCartRef } from '../../firebase/firebase.util';
import { selectCartItems } from './cart-selectors';
import { selectCurrentUser } from '../user/user.selectors';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({ cartItems });
        } catch (error) {
            console.log(error);
        }
    }
}

export function* checkCartFromFirebase({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
    yield takeLatest(
        [
            CartActionTypes.REMOVE_ITEM_FROM_CART,
            CartActionTypes.ADD_ITEM_TO_CART,
            CartActionTypes.CLEAR_ITEM_FROM_CART
        ],
        updateCartInFirebase
    );
}

export default function* cartSagas() {
    yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
