import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import styles from './sign-in-sign-up.styles.module.scss';
const SignInAndSignUpPage = () => (
    <div className={styles['sign-in-and-sign-up']}>
        <SignIn />
        <SignUp />
    </div>
)
export default SignInAndSignUpPage;