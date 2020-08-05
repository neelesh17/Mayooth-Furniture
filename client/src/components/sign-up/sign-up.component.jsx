import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Link, withRouter}from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option2.svg';

import FormInput from '../form-input/form-input.component';

import { SignUpContainer, FormContainer, LogoContainer, TextContainer } from './sign-up.styles';
import { Text, CustomButton } from '../style-utils/utils.styles';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({history, signUpStart }) => {
    const [ userCredentials, setCredentials ] = useState({
        username: '',
        name:'',
        email: '',
        phoneNo: '',
        password: '',
        confirmPassword: ''
    });

    const {name, email, phoneNo, password, confirmPassword, username } = userCredentials;
    
    const handleSubmit = async (event ) => {
        await event.preventDefault();
        if(password !== confirmPassword){
            alert("password and comfirm password does not match");
            return;
        }
        await signUpStart({name, email, phoneNo, password, username});
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name] : value});
    };

    return(
        <SignUpContainer>
            <FormContainer onSubmit={handleSubmit}>
                <TextContainer>
                    <Text font="Bold 24px Open Sans" className="active">SIGN UP</Text>
                    <Text font="Bold 24px Open Sans" onClick={() => history.push('/login')}>LOGIN</Text>  
                </TextContainer>
                <FormInput 
                    type="text"
                    name="name"
                    value={name}
                    handleChange={handleChange}
                    label="Full Name"
                    required
                />
                <FormInput 
                    type="text"
                    name="username"
                    value={username}
                    handleChange={handleChange}
                    label="Userame"
                    required
                />
                <FormInput 
                    type="number"
                    name="phoneNo"
                    value={phoneNo}
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
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <div style={{padding: "10px 0"}}>
                    <input type="radio" name="terms" className="input" required/>
                    <label className="input">
                        I Agree with the <Link to="/">Terms & Conditions</Link> of Maynooth Furniture
                    </label>
                </div>
                <div  style={{padding: "10px 0"}}>
                    <input className="input" type="checkbox" name="remember" />
                    <label className="input">Remember me</label>
                </div>
                <CustomButton backgroundColor="rgba(39, 149, 76, 1)"  type="submit" width="20em" height="4em">
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

const mapDispatchToProps = dispatch => ({
    signUpStart: (userDetails) => dispatch(signUpStart(userDetails)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));