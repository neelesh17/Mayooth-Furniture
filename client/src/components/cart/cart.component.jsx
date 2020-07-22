import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {CartIconContainer, ItemCountConatiner} from './cart.styles';

const Cart = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <i class="ri-shopping-cart-line"></i>
        Cart
        <ItemCountConatiner>1</ItemCountConatiner>
    </CartIconContainer>
);

// const mapStateToProps = createStructuredSelector({

// });

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(Cart);