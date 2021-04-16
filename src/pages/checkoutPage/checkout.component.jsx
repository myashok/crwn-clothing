import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartItemsTotal
} from '../../redux/cart/cart-selectors';

import styles from './checkout.styles.module.scss';
import StripeCheckoutButton from '../../components/stripe/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
  <div className={styles['checkout-page']}>
    <div className={styles['checkout-header']}>
      <div className={styles['header-block']}>
        <span>Product</span>
      </div>
      <div className={styles['header-block']}>
        <span>Description</span>
      </div>
      <div className={styles['header-block']}>
        <span>Quantity</span>
      </div>
      <div className={styles['header-block']}>
        <span>Price</span>
      </div>
      <div className={styles['header-block']}>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (<CheckoutItem key={item.id} cartItem={item} />))}
    <div className={styles['total']}>TOTAL: ${total}</div>
    <div className={styles['test-warning']}>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);