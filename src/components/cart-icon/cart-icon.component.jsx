import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import { selectCartItemsQuantityCount } from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemQuantityCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemQuantityCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemQuantityCount: selectCartItemsQuantityCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
