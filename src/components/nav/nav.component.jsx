import React from 'react';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option3.svg';

import {  
    NavContainer, LogoContainer, IconContainer,
     ButtonContainer, Button,Icons 
} from './nav.styles';

const Navbar = () => (
    <NavContainer>
        <LogoContainer to="/">
            <Logo classname="logo" />
        </LogoContainer>
        <ButtonContainer>
            <Button to="/">Living Room</Button>
            <Button to="/">Kitchen&Dinner</Button>
            <Button to="/">Bedroom</Button>
            <Button to="/">Contact Us</Button>
        </ButtonContainer>
        <IconContainer>
            <span ><i class="ri-search-2-line"></i></span>
            <Icons to="/"><i class="ri-user-add-line"></i></Icons>
            <Icons to="/"><i class="ri-shopping-cart-line"></i></Icons>
        </IconContainer>
    </NavContainer>
);

export default Navbar;