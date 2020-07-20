import React from 'react';

import {DetailContainer,CheckoutItemContainer} from './checkoutitem.styles';

import {ImageContainer} from '../style-utils/utils.styles';

const CheckoutItem = ({Item}) => {
    const { name, image, price } = Item;
    return(
    <CheckoutItemContainer>
        <ImageContainer src={image} alt="Item" height="100%" width="23%"/>
        <DetailContainer font="24px Raleway">{name}</DetailContainer>
        <DetailContainer>
            <i className="ri-arrow-left-s-line ri-2x" />
            <span>1</span>
            <i className="ri-arrow-right-s-line ri-2x" />
        </DetailContainer>
        <DetailContainer font="24px Raleway">{price}</DetailContainer>
        <DetailContainer ><i class="ri-close-circle-line ri-xl"></i></DetailContainer>
    </CheckoutItemContainer>
)};


export default CheckoutItem;