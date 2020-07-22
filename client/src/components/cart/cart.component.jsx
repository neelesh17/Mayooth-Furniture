import React from 'react';

import {CartIconContainer, ItemCountConatiner} from './cart.styles';

const Cart = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <i class="ri-shopping-cart-line"></i>
        Cart
        <ItemCountConatiner>1</ItemCountConatiner>
    </CartIconContainer>
);

export default Cart;