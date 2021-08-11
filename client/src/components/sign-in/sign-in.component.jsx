import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import styles from './sign-in.styles.module.scss';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { useState } from 'react';
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ 'email': '', 'password': '' });
    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = async event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };
    return (
        <div className={styles['sign-in']}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <div className={styles['buttons']}>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(
    null,
    mapDispatchToProps
)(SignIn);
