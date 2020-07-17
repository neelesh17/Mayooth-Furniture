import React from 'react';

import { SlideContainer, TextConatiner,} from './slide3.styles';

import { CustomButton, Text} from '../../../style-utils/utils.styles';

const Slide3 = ({dis}) => (
    <SlideContainer display={dis} >
        <TextConatiner>
            <Text font="32px Raleway">Great New!!!!!!</Text>
            <Text font="Bold  96px Raleway">The Diwali Sale is Live</Text>
            <Text font="24px Raleway">Get till 40% off on your favorite furnitue</Text>
            <CustomButton color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)">Shop Now</CustomButton>
        </TextConatiner> 
    </SlideContainer>
);

export default Slide3;