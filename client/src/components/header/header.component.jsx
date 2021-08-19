import styles from './header.component.module.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import React from 'react';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className={styles['header']} >
        <Link className={styles['logo-container']} to='/'>
            <Logo className={styles['logo']} />
        </Link>
        <div className={styles['options']}>
            <Link className={styles['option']} to='/'>
                HOME
            </Link>
            <Link className={styles['option']} to='/shop'>
                SHOP
            </Link>
            {currentUser ? (
                <div className={styles['option']} onClick={signOutStart}>
                    SIGN OUT
                </div>
            ) : (
                <Link className={styles['option']} to='/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {
            hidden ? null :
                (<CartDropdown />)
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
