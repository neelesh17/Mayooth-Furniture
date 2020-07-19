import React, {useState} from 'react';
import {Link}from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option2.svg';

import FormInput from '../form-input/form-input.component';

import { SignUpContainer, FormContainer, LogoContainer } from './sign-up.styles';
import { Text, CustomButton } from '../style-utils/utils.styles';


const SignUp = () => {
    const [ userCredentials, setCredentials ] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    })

    const {name, email, number, password, confirmPassword } = userCredentials;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name] : value});
    }
    return(
        <SignUpContainer>
            <FormContainer>
                <FormInput 
                    type="text"
                    name="name"
                    value={name}
                    handleChange={handleChange}
                    label="Full Name"
                    required
                />
                <FormInput 
                    type="number"
                    name="numer"
                    value={number}
                    handleChange={handleChange}
                    label="Phone Number"
                    required
                />
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
                <FormInput 
                    type="password"
                    name="confirm password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <div>
                    <input type="radio" name="terms" className="input" />
                    <label for="terms" className="input">
                        I Agree with the <Link>Terms & Conditions</Link> of Maynooth Furniture
                    </label>
                </div>
                <div>
                    <input className="input" type="checkbox" name="remember" />
                    <label className="input" for="remember">Remember me</label>
                </div>
                <CustomButton backgroundColor="rgba(39, 149, 76, 1)"  width="20em" height="4em">
                    <Text color="rgba(255, 255, 255, 1)" font="30px Raleway">Sign Up</Text>
                </CustomButton>
            </FormContainer>
            <div>
                <Text font="40px Raleway">Hello,<br></br>Welcome to,</Text>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
            </div>
        </SignUpContainer>
)};

export default SignUp;