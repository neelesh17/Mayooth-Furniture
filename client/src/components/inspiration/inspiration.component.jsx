import React from 'react';

import { InspirationContainer, TextContainer ,InspireText} from './inspiration.styles';

import {ImageContainer} from '../style-utils/utils.styles';

const InspirationProduct = () => (
    <InspirationContainer>
        <TextContainer>
            <InspireText font="Bold Italic 40px Raleway">Get Inspired</InspireText>
            <InspireText font="16px Open Sans">Discover MADE Ideas. Where you can explore inspiring <br></br>interiors, and get helpful tips and style advice to <br></br>transform your space. Come on in</InspireText>
            <InspireText className ="more-info" font="Bold 24px Raleway">READ MORE</InspireText>
        </TextContainer>
        <ImageContainer src='images/Inspire1.png' height="100%" width = "873px"/>
    </InspirationContainer>
);

export default InspirationProduct;