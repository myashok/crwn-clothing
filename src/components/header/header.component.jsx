import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import './header.component.scss';
import {auth} from '../../firebase/firebase.util'
const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
             <Link className="option" to="/contact">
                Contact
            </Link>
            {   currentUser ?  (
                    <div className='option' onClick={() => auth.signOut()}>
                        Sign out
                    </div>
                ):
                (<Link className="option" to="/signin">
                    Sign In
                </Link>
                )
            }
        </div>
    </div>
)
export default Header;