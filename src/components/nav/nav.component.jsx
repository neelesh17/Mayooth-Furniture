import React from 'react';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option3.svg';

import {  
    NavContainer, LogoContainer, IconContainer,
     ButtonContainer,Icons 
} from './nav.styles';

import { CustomButton } from '../style-utils/utils.styles'

const Navbar = () => (
    <NavContainer>
        <LogoContainer to="/">
            <Logo classname="logo" />
        </LogoContainer>
        <ButtonContainer>
            <CustomButton color="rgba(39, 149, 76, 1)" backgroundColor = "rgba(255, 255,255, 1)">Living Room</CustomButton>
            <CustomButton color="rgba(39, 149, 76, 1)" backgroundColor = "rgba(255, 255,255, 1)">Kitchen&Dinner</CustomButton>
            <CustomButton color="rgba(39, 149, 76, 1)" backgroundColor = "rgba(255, 255,255, 1)">Bedroom</CustomButton>
            <CustomButton color="rgba(39, 149, 76, 1)" backgroundColor = "rgba(255, 255,255, 1)">Contact Us</CustomButton>
        </ButtonContainer>
        <IconContainer>
            <span ><i class="ri-search-2-line"></i></span>
            <Icons to="/"><i class="ri-user-add-line"></i></Icons>
            <Icons to="/"><i class="ri-shopping-cart-line"></i></Icons>
        </IconContainer>
    </NavContainer>
);

export default Navbar;