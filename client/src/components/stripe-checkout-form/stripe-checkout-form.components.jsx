import React, {useState} from 'react';
import {
    CardElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";

import { FormContainer } from './stripe-checkout-form.styles';
import { CustomButton, Text } from '../style-utils/utils.styles';
import FormInput from '../form-input/form-input.component'; 

const CheckoutForm = ({price}) => {
    const [ userCredentials, setCredentials ] = useState({
        name: '',
        email: '',
        address: '',
        number: ''
    });
    const {name, email, address, number} = userCredentials;
    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name] : value});
    }
    return (
        <FormContainer>
            <Text font="36px Raleway" padding="1em 0 1em 0">Payment Details</Text>
            <FormInput 
                    type="text"
                    name="name"
                    value={name}
                    handleChange={handleChange}
                    label="Name"
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
                    type="text"
                    name="address"
                    value={address}
                    handleChange={handleChange}
                    label="Address"
                    required
                />
                <FormInput 
                    type="number"
                    name="number"
                    value={number}
                    handleChange={handleChange}
                    label="Phone Number"
                    required
                />
            <CardElement />
            <Text font="24px Raleway" padding="1em 0 0 0">Total: ${price/100}</Text>
            <CustomButton color="white" backgroundColor="#eb6763" disabled={!stripe}>Pay Now</CustomButton>
            <Text font="24px Raleway" color="red" padding="0 0 1em 0">
                *Please use the following test credit card for payment*
                <br/>
                4242 4242 4242 4242 - Exp: 01/25 CVV:123
            </Text>
        </FormContainer>
    );
}

export default CheckoutForm;