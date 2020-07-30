import React, {useState} from 'react';
import { connect } from 'react-redux';
import {withRouter}from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option2.svg';

import FormInput from '../form-input/form-input.component';

import { SignUpContainer, FormContainer, LogoContainer, TextContainer } from './sign-in.styles';
import { Text, CustomButton } from '../style-utils/utils.styles';

import {emailSignInStart} from '../../redux/user/user.actions';

const SignIn = ({history, emailSignInStart}) => {
    const [ userCredentials, setCredentials ] = useState({
        username: '',
        password: '',
    })

    const {username,password } = userCredentials;

    const handleSubmit = async (event ) => {
        await event.preventDefault();
        emailSignInStart({username,password});
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name] : value});
    }
    return(
        <SignUpContainer>
            <FormContainer onSubmit={handleSubmit}>
                <TextContainer>
                    <Text font="Bold 24px Open Sans" onClick={() => history.push('/signup')}>SIGN UP</Text>
                    <Text font="Bold 24px Open Sans" className="active">LOGIN</Text>  
                </TextContainer>
                <FormInput 
                    type="username"
                    name="username"
                    value={username}
                    handleChange={handleChange}
                    label="Username"
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
                    <label className="input" htmlFor="remember">Remember me</label>
                </div>
                <CustomButton backgroundColor="rgba(39, 149, 76, 1)"  type="submit" width="20em" height="4em">
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

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));