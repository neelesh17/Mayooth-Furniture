import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option3.svg';

import {  
    NavContainer, LogoContainer, IconContainer,
     ButtonContainer, Icons 
} from './nav.styles';

import { CustomButton } from '../style-utils/utils.styles'

import Cart from '../cart/cart.component';
import CartDropdown from '../cart-dropdown/cart.dropdown.component';
import {ProductItem} from '../Items';

const Navbar = () => (
    <NavContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <ButtonContainer>
            <Link to="/shop/livingroom">
                <CustomButton color="rgba(39, 149, 76, 1)" backgroundColor = "rgba(255, 255,255, 1)">Living Room</CustomButton>
            </Link>
            <Link to="/shop/kitchendinner">
                <CustomButton color="rgba(39, 149, 76, 1)" backgroundColor = "rgba(255, 255,255, 1)">Kitchen&Dinner</CustomButton>
            </Link>
            <Link to="/shop/bedroom">
                <CustomButton color="rgba(39, 149, 76, 1)" backgroundColor = "rgba(255, 255,255, 1)">Bedroom</CustomButton>
            </Link>
            <Link to="/contactus">
                <CustomButton color="rgba(39, 149, 76, 1)" backgroundColor = "rgba(255, 255,255, 1)">Contact Us</CustomButton>
            </Link>
        </ButtonContainer>
        <IconContainer>
            <span className="search"><i className="ri-search-2-line"></i></span>
            <Icons to="/signup"><i className="ri-user-add-line icon"></i></Icons>
            <Cart />
            <CartDropdown cartItems={ProductItem}/>
        </IconContainer>
    </NavContainer>
);

export default Navbar;