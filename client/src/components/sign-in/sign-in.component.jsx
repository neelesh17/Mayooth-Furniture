import React, {useState} from 'react';
import {withRouter}from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option2.svg';

import FormInput from '../form-input/form-input.component';

import { SignUpContainer, FormContainer, LogoContainer, TextContainer } from './sign-in.styles';
import { Text, CustomButton } from '../style-utils/utils.styles';


const SignIn = ({history}) => {
    const [ userCredentials, setCredentials ] = useState({
        email: '',
        password: '',
    })

    const {email,password } = userCredentials;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name] : value});
    }
    return(
        <SignUpContainer>
            <FormContainer>
                <TextContainer>
                    <Text font="Bold 24px Open Sans" onClick={() => history.push('/signup')}>SIGN UP</Text>
                    <Text font="Bold 24px Open Sans" className="active">LOGIN</Text>  
                </TextContainer>
                <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <div >
                    <input className="input" type="checkbox" name="remember" />
                    <label className="input" for="remember">Remember me</label>
                </div>
                <CustomButton backgroundColor="rgba(39, 149, 76, 1)"  width="20em" height="4em">
                    <Text color="rgba(255, 255, 255, 1)" font="30px Raleway">Sign In</Text>
                </CustomButton>
            </FormContainer>
            <div>
                <Text font="40px Raleway">Hello,<br></br>Welcome back,</Text>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
            </div>
        </SignUpContainer>
)};

export default withRouter(SignIn);