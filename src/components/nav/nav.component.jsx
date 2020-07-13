import React from 'react';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option1.svg';

import {  NavContainer, LogoContainer } from './nav.styles';

const Navbar = () => (
    <NavContainer>
        <LogoContainer to="/">
            <Logo classname="logo" />
        </LogoContainer>
    </NavContainer>
);

export default Navbar;