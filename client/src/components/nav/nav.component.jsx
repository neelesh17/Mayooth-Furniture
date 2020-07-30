import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option3.svg';

import {  
    NavContainer, LogoContainer, IconContainer,
     ButtonContainer, Icons 
} from './nav.styles';

import { CustomButton } from '../style-utils/utils.styles'

import Cart from '../cart/cart.component';
import CartDropdown from '../cart-dropdown/cart.dropdown.component';

const Navbar = ({hidden, currentUser, signOutStart}) => (
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
            {
                currentUser ?
                <Icons as="div" onClick={signOutStart}><i className="ri-logout-circle-r-line icon"></i></Icons>
                :
                <Icons to="/signup"><i className="ri-user-add-line icon"></i></Icons>
            }
            
            <Cart />
        </IconContainer>
        {hidden ? null : <CartDropdown />}
    </NavContainer>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);