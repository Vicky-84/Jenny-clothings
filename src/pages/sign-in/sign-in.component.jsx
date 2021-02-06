import React from 'react';
import SignInForm from '../sign-in-form/sign-in-form.component';
import SignUpForm from '../sign-up-form/sign-up-form.component';
import './sign-in.styles.scss'

const SignIn = () => (
    <div className="sign-in-and-sign-up">
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
    </div>
)

export default SignIn;