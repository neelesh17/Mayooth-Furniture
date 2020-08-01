import React from 'react';
import {connect} from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from '../stripe-checkout-form/stripe-checkout-form.components';
import image from '../../assets/Logo-Maynooth-Option2.svg';
import { clearCart } from '../../redux/cart/cart.actions';
import { CheckoutFormContainer } from './stripe-checkout.styles';

const StripeCheckout = ({ price}) => {
    const priceForStripe = price * 100;
    const pulishableKey = loadStripe('pk_test_51HAsAkAyMSzMdhZLQewW5Fg5Oh1a3CMFhmVPjDetrUEAnDIz8T5uLaZfNtxZrAcer4nLpYhMTVFwTDWVN8Gtv5fh0059PSPXa4');
    return (
        <Elements stripe={pulishableKey}>
            <CheckoutFormContainer>
                <CheckoutForm price={priceForStripe}/>
            </CheckoutFormContainer>
        </Elements>
    )
}

// const mapDispatchToProps = dispatch => ({
//     clearCart : () => dispatch(clearCart()),
// });

export default StripeCheckout;