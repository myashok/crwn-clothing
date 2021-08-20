import React from 'react';

import styles from './cart-item.styles.module.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className={styles['cart-item']}>
    <img src={imageUrl} alt='item' />
    <div className={styles['item-details']}>
      <span className={styles['name']}>{name}</span>
      <span className={styles['price']}>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);