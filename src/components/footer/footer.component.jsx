import React from  'react'

import { FooterContainer, FooterServiceContainer, FooterTextContainer ,FooterIconContainer, FooterLogoContainer} from './footer.styles';

import{ ReactComponent as Logo} from '../../assets/Logo-Maynooth-Option4.svg';

const Footer = () => (
    <FooterContainer>
        <FooterServiceContainer>
            <FooterTextContainer className="heading" font="Bold 24px Open Sans">Contact Us</FooterTextContainer>
            <FooterTextContainer font="16px Open Sans">+44 345 678 903</FooterTextContainer>
            <FooterTextContainer font="16px Open Sans">adobexd@mail.com </FooterTextContainer>
            <FooterTextContainer font="16px Open Sans">Find a Store</FooterTextContainer>
        </FooterServiceContainer>
        <FooterServiceContainer>
            <FooterTextContainer className="heading" font="Bold 24px Open Sans">Services</FooterTextContainer>
            <FooterTextContainer font="16px Open Sans">Ordering & Payment</FooterTextContainer>
            <FooterTextContainer font="16px Open Sans">Shipping </FooterTextContainer>
            <FooterTextContainer font="16px Open Sans">Returns</FooterTextContainer>
            <FooterTextContainer font="16px Open Sans">FAQ</FooterTextContainer>
            <FooterTextContainer font="16px Open Sans">Sizing Guide</FooterTextContainer>
        </FooterServiceContainer>
        <FooterIconContainer>
            <i className="ri-facebook-fill ri-2x" ></i>
            <i className="ri-instagram-line ri-2x"></i>
            <i className="ri-twitter-fill ri-2x"></i>
        </FooterIconContainer>
        <FooterLogoContainer>
            <Logo />
        </FooterLogoContainer>
        
    </FooterContainer>
);

export default Footer;