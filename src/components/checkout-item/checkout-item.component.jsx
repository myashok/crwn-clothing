import React from 'react';

import './checkout-item.styles.scss';
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
const CheckoutItem = ({ cartItem, clearItemFromCart, removeItemFromCart, addItemToCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
                    &#10094;
            </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                    &#10095;
            </div>
            </span>
            <span className='price'>{price} &#10005; {quantity} = {price*quantity}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);