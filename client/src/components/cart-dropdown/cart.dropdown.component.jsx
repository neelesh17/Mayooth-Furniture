import React from 'react';
import { withRouter } from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, 
    CartDropdownButton, CartDropdownHeaderContainer } from './cart.dropdown.styles';

import { ItemCountConatiner } from '../cart/cart.styles';

const CartDropdown = ({cartItems, history}) => (
    <CartDropdownContainer>
        <CartDropdownHeaderContainer>
            <div style={{display: "flex"}}>
                <i class="ri-shopping-cart-line"></i>
                <ItemCountConatiner>1</ItemCountConatiner>
            </div> 
            <div>
                <span>Total:</span> <span style={{color: "rgba(76, 179, 170, 1)"}}>$2000</span>
            </div>
        </CartDropdownHeaderContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                cartItems.map( cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) 
                ) : <EmptyMessageContainer>Your Cart Is Empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton color="white" backgroundColor="rgba(204, 76, 110, 1)" width="13em" height="auto" onClick={() => {
            history.push("/checkout");
        }}>
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

export default withRouter(CartDropdown);