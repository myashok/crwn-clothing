import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import styles from './collection-item.styles.module.scss'
const CollectionItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className={styles['collection-item']}>
            <div className={styles['image']} style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className={styles['collection-footer']}>
                <span className={styles['name']}>{name}</span>
                <span className={styles['price']}>{price}</span>
            </div>
            <CustomButton className={`${styles['custom-button']} inverted custom-button`} onClick={() => addItemToCart(item)}> Add to Cart</CustomButton>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);