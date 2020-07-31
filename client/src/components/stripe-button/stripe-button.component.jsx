import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import image from '../../assets/Logo-Maynooth-Option2.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pulishableKey = 'pk_test_51HAsAkAyMSzMdhZLQewW5Fg5Oh1a3CMFhmVPjDetrUEAnDIz8T5uLaZfNtxZrAcer4nLpYhMTVFwTDWVN8Gtv5fh0059PSPXa4';

    const onToken = token => {
        axios({
            url: '/api/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue with your payment. Please make sure you use the provided credit card');
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Maynooth Furniture Ltd.'
            billingAddress
            shippingAddress
            image={image}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={ onToken }  
            stripeKey= { pulishableKey }
        />
    )
}

export default StripeCheckoutButton;