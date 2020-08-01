import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter } from 'react-router-dom';

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlock } from './checkout.styles';
import {Text, CustomButton} from '../../components/style-utils/utils.styles';

import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkoutitem/checkoutitem.component';

const CheckoutPage = ({cartItems, total, history}) => (
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
        <CustomButton color="white" backgroundColor="black" width="15em" onClick={() => history.push("/payment")}>Go to Checkout</CustomButton>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));