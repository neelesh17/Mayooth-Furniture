import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

import {DetailContainer,CheckoutItemContainer} from './checkoutitem.styles';
import {ImageContainer} from '../style-utils/utils.styles';

const CheckoutItem = ({item, clearItem, addItem, removeItem}) => {
    const { name, image, price, quantity } = item;
    return(
    <CheckoutItemContainer>
        <ImageContainer src={image} alt="Item" height="100%" width="23%"/>
        <DetailContainer font="24px Raleway">{name}</DetailContainer>
        <DetailContainer>
            <i className="ri-arrow-left-s-line ri-2x" onClick={() => removeItem(item)}/>
            <span>{quantity}</span>
            <i className="ri-arrow-right-s-line ri-2x" onClick={() => addItem(item)}/>
        </DetailContainer>
        <DetailContainer font="24px Raleway">${price}</DetailContainer>
        <DetailContainer ><i class="ri-close-circle-line ri-xl" onClick={() => clearItem(item)}></i></DetailContainer>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);