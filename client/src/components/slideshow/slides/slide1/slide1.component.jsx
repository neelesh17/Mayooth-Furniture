import React from 'react';
import {Link} from 'react-router-dom';

import { SlideContainer, TextConatiner} from './slide1.styles';

import { CustomButton, Text, ImageContainer } from '../../../style-utils/utils.styles';

const Slide1 = ({dis}) => (
    <SlideContainer display={dis}>
        <ImageContainer src='images/sales1.png' alt="sofa" height="358px" width="568px"></ImageContainer>
        <TextConatiner>
            <Text font="32px Raleway">Deal of the week!</Text>
            <Text font="Bold Italic 115px Raleway">upto 30% off</Text>
            <Text font="24px Raleway">These are a steal!</Text>
            <Link to="/shop/livingroom">
                <CustomButton color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)">Explore</CustomButton>
            </Link>
        </TextConatiner>
    </SlideContainer>
);

export default Slide1;