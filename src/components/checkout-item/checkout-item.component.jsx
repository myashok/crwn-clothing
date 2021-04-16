import React from 'react';

import styles from './checkout-item.styles.module.scss';
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
const CheckoutItem = ({ cartItem, clearItemFromCart, removeItemFromCart, addItemToCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className={styles['checkout-item']}>
            <div className={styles['image-container']}>
                <img src={imageUrl} alt='item' />
            </div>
            <span className={styles['name']}>{name}</span>
            <span className={styles['quantity']}>
                <div className={styles['arrow']} onClick={() => removeItemFromCart(cartItem)}>
                    &#10094;
            </div>
                <span className={styles['value']}>{quantity}</span>
                <div className={styles['arrow']} onClick={() => addItemToCart(cartItem)}>
                    &#10095;
            </div>
            </span>
            <span className={styles['price']}>{price} &#10005; {quantity} = {price * quantity}</span>
            <div className={styles['remove-button']} onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);