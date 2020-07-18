import React from 'react';

import { SlideContainer, TextConatiner,} from './slide2.styles';

import { CustomButton, Text, ImageContainer } from '../../../style-utils/utils.styles';

import image2 from '../../../../images/sales2.jpg';

const Slide2 = ({dis}) => (
    <SlideContainer display={dis} >
        <ImageContainer src={image2} alt="sofa" height="358px" width="568px"></ImageContainer>
        <TextConatiner>
            <Text font="32px Raleway">Bedroom</Text>
            <Text font="Bold  96px Raleway">Extra Saving</Text>
            <Text font="24px Raleway">This Week Only!!!</Text>
            <CustomButton color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)">Check It  Out</CustomButton>
        </TextConatiner> 
    </SlideContainer>
);

export default Slide2;