import React from "react";

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlock } from './checkout.styles';
import {Text} from '../../components/style-utils/utils.styles';

import {NewItems} from '../../components/Items';

import CheckoutItem from '../../components/checkoutitem/checkoutitem.component';

const CheckoutPage = () => (
    <CheckoutPageContainer>
        <Text font="Bold Italic 51px Raleway" id="heading">Checkout</Text>
        <CheckoutHeaderContainer>
            <HeaderBlock font="24px Raleway">Product</HeaderBlock>
            <HeaderBlock font="24px Raleway">Description</HeaderBlock>
            <HeaderBlock font="24px Raleway">Quantity</HeaderBlock>
            <HeaderBlock font="24px Raleway">Price</HeaderBlock>
            <HeaderBlock font="24px Raleway">Remove</HeaderBlock>
        </CheckoutHeaderContainer>
        {
            NewItems.map(Item => 
                <CheckoutItem key={Item.id} Item={Item}/>
            )
        }
        <Text font="36px Raleway" className="total">Total: $</Text>
        <Text font="24px Raleway" color="red">
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - Exp: 01/25 CVV:123
        </Text>
    </CheckoutPageContainer>
);

export default CheckoutPage;