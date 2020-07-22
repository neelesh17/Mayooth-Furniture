import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {CartIconContainer, ItemCountConatiner} from './cart.styles';

const Cart = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <i className="ri-shopping-cart-line"></i>
        Cart
        <ItemCountConatiner>{itemCount}</ItemCountConatiner>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect( mapStateToProps,mapDispatchToProps)(Cart);