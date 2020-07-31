import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlock } from './checkout.styles';
import {Text} from '../../components/style-utils/utils.styles';

import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkoutitem/checkoutitem.component';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <Text font="Bold Italic 51px Raleway" id="heading">Checkout</Text>
        <CheckoutHeaderContainer>
            <HeaderBlock font="24px Raleway">Product</HeaderBlock>
            <HeaderBlock font="24px Raleway">Name</HeaderBlock>
            <HeaderBlock font="24px Raleway">Quantity</HeaderBlock>
            <HeaderBlock font="24px Raleway">Price</HeaderBlock>
            <HeaderBlock font="24px Raleway">Remove</HeaderBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(item => 
                <CheckoutItem key={item._id} item={item}/>
            )
        }
        <Text font="36px Raleway" className="total">Total: ${total}</Text>
        <Text font="24px Raleway" color="red">
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - Exp: 01/25 CVV:123
        </Text>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);