import React,{useState} from 'react';

import { SigninAndSignupContainer, TextContainer } from './signin-signup.styles';
import { Text } from '../../components/style-utils/utils.styles';

import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

const SigninAndSignupPage = () => {
    const [isActive, setActive] = useState({
        active: "signup"
    });
    const {active} = isActive;
    const handleChange = (event) => {
        if(event.target.id === active ){
            return;
        } else {
            setActive({active: event.target.id});
        }
    }

    return(
        <SigninAndSignupContainer>
            <TextContainer>
                <Text font="Bold 24px Open Sans" id="signup" className={active === "signup"? 'active': ''} onClick={handleChange}>SIGN UP</Text>
                <Text font="Bold 24px Open Sans" id="login" className={active === "login"? 'active': ''} onClick={handleChange}>LOGIN</Text>  
            </TextContainer>
            {active === "signup" ?
                <SignUp /> : <SignIn />
            }
        </SigninAndSignupContainer>
)};

export default SigninAndSignupPage;