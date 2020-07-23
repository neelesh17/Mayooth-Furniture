import React from 'react';
import {Link} from 'react-router-dom';

import { SlideContainer, TextConatiner,} from './slide2.styles';

import { CustomButton, Text, ImageContainer } from '../../../style-utils/utils.styles';


const Slide2 = ({dis}) => (
    <SlideContainer display={dis} >
        <ImageContainer src='images/sales2.jpg' alt="sofa" height="358px" width="568px"></ImageContainer>
        <TextConatiner>
            <Text font="32px Raleway">Bedroom</Text>
            <Text font="Bold  96px Raleway">Extra Saving</Text>
            <Text font="24px Raleway">This Week Only!!!</Text>
            <Link to="/shop/bedroom">
                <CustomButton color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)">Check It  Out</CustomButton>
            </Link>
        </TextConatiner> 
    </SlideContainer>
);

export default Slide2;