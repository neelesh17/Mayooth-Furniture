import React, {useState} from 'react';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option2.svg';

import FormInput from '../../components/form-input/form-input.component';
import FormTextArea from  '../../components/form-input/form-textarea.component';

import  {ContactUsContainer, LogoContainer,  Form, 
    TextContainer, FormContainer} from './contactus.styles';
import {CustomButton, Text} from '../../components/style-utils/utils.styles';

const ContactUs = () => {
    const [ messageCredentials, setCredentials ] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message:''
    });

    const {name, email, number, subject, message } = messageCredentials;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...messageCredentials, [name] : value});
    };

    return(
    <ContactUsContainer> 
        <Form id="contactus">
            <FormContainer >
                <div style={{width: "50%"}}>
                    <FormInput type="text"
                        name="name"
                        value={name}
                        handleChange={handleChange}
                        label="Full Name"
                        required
                    />
                    <FormInput type="number"
                        name="number"
                        value={number}
                        handleChange={handleChange}
                        label="Phone Number"
                        step="0.01"
                        required
                    />
                    <FormInput type="email"
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        label="Email"
                        required
                    />
                    <FormInput type="text"
                        name="subject"
                        value={subject}
                        handleChange={handleChange}
                        label="Subject"
                        required
                    />
                </div>
                <div style={{"margin-left": '10em'}}>
                    <TextContainer font="40px Raleway">Contact Us</TextContainer>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                </div>
            </FormContainer>
            <FormTextArea type="text"
                name="message"
                value={message}
                handleChange={handleChange}
                label="Message"
                form="contactus"
                required
            />
            <CustomButton backgroundColor="rgba(39, 149, 76, 1)"  type="submit" width="20em" height="4em">
                    <Text color="rgba(255, 255, 255, 1)" font="30px Raleway">Submit</Text>
            </CustomButton>
        </Form>
    </ContactUsContainer>
    )
};

export default ContactUs;