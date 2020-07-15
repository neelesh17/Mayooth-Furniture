import React from 'react';

import {  ContentContainer, Text, TextConatiner, 
    Button, Dot, DotContainer, ImageContainer , 
    SlideshowContainer, PrevNextArrows
} from './slideshow.styles';
import image from '../../images/sales1.png'

const Slideshow = () => (
    <SlideshowContainer>
        <ContentContainer>
            <PrevNextArrows>&#10094;</PrevNextArrows>
            <ImageContainer src={image} alt="sofa" ></ImageContainer>
            <TextConatiner>
                <Text font="32px Raleway">Deal of the week!</Text>
                <Text font="Bold Italic 115px Raleway">upto 30% off</Text>
                <Text font="24px Raleway">These are a steal!</Text>
                <Button to="/">Explore</Button>
            </TextConatiner>
            <PrevNextArrows>&#10095;</PrevNextArrows>
        </ContentContainer>
        <DotContainer>
                <Dot color="rgba(112, 112, 112, 1)"/>
                <Dot color="rgba(255, 255, 255, 1)"/>
                <Dot color="rgba(255, 255, 255, 1)"/>
                <Dot color="rgba(255, 255, 255, 1)"/>
        </DotContainer>
    </SlideshowContainer>
);

export default Slideshow;