import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option3.svg';

import {  
    NavContainer, LogoContainer, InputContainer,
    UserIconContainer, CartIconContainer, ButtonContainer, Button 
} from './nav.styles';

const Navbar = () => (
    <NavContainer>
        <LogoContainer to="/">
            <Logo classname="logo" />
        </LogoContainer>
        <InputContainer type="search" placeholder=" Search"/>
        <UserIconContainer>
            <i class="ri-user-add-line"></i>
        </UserIconContainer>
        <CartIconContainer>
            <i class="ri-shopping-cart-line"></i>
        </CartIconContainer>
        <ButtonContainer>
            <Button >Living Room<Link to="/" /></Button>
            <Button >Kitchen&Dinner</Button>
            <Button >Bedroom</Button>
            <Button >Contact Us</Button>
        </ButtonContainer>
    </NavContainer>
);

export default Navbar;