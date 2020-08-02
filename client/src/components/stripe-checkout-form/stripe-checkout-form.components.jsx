import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

import { clearCart } from '../../redux/cart/cart.actions';
import { selectCartTotal } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { FormContainer } from './stripe-checkout-form.styles';
import { CustomButton, Text } from '../style-utils/utils.styles';
import FormInput from '../form-input/form-input.component'; 

const CheckoutForm = ({price, history, clearCart, currentUser}) => {

    const [ userCredentials, setCredentials ] = useState({
        name: '',
        email: '',
        address: '',
        number: ''
    });
    useEffect(() => {
        if(currentUser){
            setCredentials({name: currentUser.username, email: currentUser.email, number: currentUser.phoneNo, address: ''})
        }
    },[currentUser]);
    price = price*100;
    const {name, email, address, number} = userCredentials;
    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name] : value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });
        if(!error){
            const { id } = paymentMethod;
            try{
                const  { data } = await axios.post("/api/payment", {id, amount: price, userCredentials});
                alert("payment successfull");
                clearCart();
                history.push("/");
            } catch (error) {
                console.log(error);
                alert("Payment unsuccessful");
                history.push("/");
            }
        }
    }
    return (
        <FormContainer onSubmit={handleSubmit}>
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
            <CustomButton color="white" backgroundColor="#eb6763" type="submit">Pay Now</CustomButton>
            <Text font="24px Raleway" color="red" padding="0 0 1em 0">
                *Please use the following test credit card for payment*
                <br/>
                4242 4242 4242 4242 - Exp: 01/25 CVV:123
            </Text>
        </FormContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    price: selectCartTotal,
    currentUser: selectCurrentUser,
});


const mapDispatchToProps = dispatch => ({
    clearCart : () => dispatch(clearCart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutForm));