import React from 'react';

import { SigninAndSignupContainer, TextContainer } from './signin-signup.styles';
import { Text } from '../../components/style-utils/utils.styles';

import SignUp from '../../components/sign-up/sign-up.component';

const SigninAndSignupPage = () => (
    <SigninAndSignupContainer>
        <TextContainer>
            <Text font="Bold 24px Open Sans">SIGN UP</Text>
            <Text font="Bold 24px Open Sans">LOGIN</Text>
        </TextContainer>
        <SignUp />
    </SigninAndSignupContainer>
);

export default SigninAndSignupPage;