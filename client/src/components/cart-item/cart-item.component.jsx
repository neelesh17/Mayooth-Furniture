import React from 'react';

import { ImageConatiner, ItemDetailContainer, CartItemContainer} from './cart-item.styles';

const CartItem = ({ item: { image, price, name, quantity } }) => (
    <CartItemContainer>
        <ImageConatiner src={image} alt="item"/>
        <ItemDetailContainer>
            <span>{name}</span>
            <div >
                <span>
                    {price} 
                </span>
            <span style={{color:"rgba(0, 0, 0, 0.5)"}}>Quantity: <span style={{color:"rgba(76, 179, 170, 1)"}}>{quantity}</span></span>
            </div>
        </ItemDetailContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);