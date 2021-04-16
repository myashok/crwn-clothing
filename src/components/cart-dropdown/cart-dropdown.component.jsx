import React from 'react';
import styles from './cart-dropdown.styles.module.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { clearCart } from '../../redux/cart/cart.actions';

const cartDropdown = ({ cartItems, history, dispatch }) => (
    <div className={styles['cart-dropdown']}>
        <div className={styles['cart-items']}>
            {cartItems.length ?
                (cartItems.map(item => (<CartItem key={item.id} item={item} />))) :
                <span className={styles['empty-message']}>Your cart is empty</span>
            }
        </div>
            <CustomButton danger onClick={() => {
                dispatch(clearCart())
            }} >CLEAR CART</CustomButton>
            <CustomButton inverted onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }} >GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(cartDropdown));