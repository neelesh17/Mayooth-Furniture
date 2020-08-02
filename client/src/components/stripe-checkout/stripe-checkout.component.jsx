import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from '../stripe-checkout-form/stripe-checkout-form.components';
import { CheckoutFormContainer } from './stripe-checkout.styles';

const StripeCheckout = ({ price}) => {
    const pulishableKey = loadStripe('pk_test_51HAsAkAyMSzMdhZLQewW5Fg5Oh1a3CMFhmVPjDetrUEAnDIz8T5uLaZfNtxZrAcer4nLpYhMTVFwTDWVN8Gtv5fh0059PSPXa4');
    return (
        <Elements stripe={pulishableKey}>
            <CheckoutFormContainer>
                <CheckoutForm />
            </CheckoutFormContainer>
        </Elements>
    )
}

export default StripeCheckout;