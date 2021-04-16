import styles from './header.component.module.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import React from 'react';
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';

const Header = ({ currentUser, hidden }) => (
    <div className={styles['header']}>
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
            <Link className={styles['option']} to='/contact'>
                Contact
            </Link>
            {currentUser ? (
                <div className={styles['option']} onClick={() => auth.signOut()}>
                    Sign out
                </div>
            ) :
                (<Link className={styles['option']} to='/signin'>
                    Sign In
                </Link>
                )
            }
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

export default connect(mapStateToProps)(Header);