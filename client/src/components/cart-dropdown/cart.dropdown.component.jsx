import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems, selectCartItemsCount, selectCartTotal} from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, 
    CartDropdownButton, CartDropdownHeaderContainer } from './cart.dropdown.styles';
import { ItemCountConatiner } from '../cart/cart.styles';

const CartDropdown = ({cartItems, itemCount, total, history, dispatch}) => (
    <CartDropdownContainer>
        <CartDropdownHeaderContainer>
            <div style={{display: "flex"}}>
                <i className="ri-shopping-cart-line"></i>
                <ItemCountConatiner>{itemCount}</ItemCountConatiner>
            </div> 
            <div>
                <span>Total:</span> <span style={{color: "rgba(76, 179, 170, 1)"}}>${total}</span>
            </div>
        </CartDropdownHeaderContainer>
        <CartItemsContainer>
            {
                (!cartItems || !cartItems.length) ? 
                <EmptyMessageContainer>Your Cart Is Empty</EmptyMessageContainer>
                : (
                cartItems.map( cartItem => (
                    <CartItem key={cartItem._id} item={cartItem} />
                )) 
                )  
            }
            <CartDropdownButton color="white" backgroundColor="rgba(204, 76, 110, 1)" width="13em" height="auto" onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartItemsContainer>
    </CartDropdownContainer>
);

const  mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    itemCount: selectCartItemsCount,
    total: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(CartDropdown));