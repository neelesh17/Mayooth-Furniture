import React from 'react';

import {  ContentContainer, Dot, DotContainer , 
    SlideshowContainer, PrevNextArrows, 
} from './slideshow.styles';

import Slide1 from './slides/slide1/slide1.component';
import Slide2 from './slides/slide2/slide2.component';
import Slide3 from './slides/slide3/slide3.component';

class Slideshow extends React.Component {
    constructor(){
        super();
        this.state = {
            slideNo: 1,
        };
        this.nextSlide = () => {
            if(this.state.slideNo === 3){
                this.setState({slideNo: 1})
            }else {
                this.setState({slideNo: this.state.slideNo + 1})
            }
        };
        this.prevSlide = () => {
            if(this.state.slideNo === 1){
                this.setState({slideNo: 3})
            }else {
                this.setState({slideNo: this.state.slideNo - 1})
            }
        };
        setInterval(this.nextSlide, 4000);
    }
    
    render(){
        return(
            <SlideshowContainer>
                <ContentContainer>
                    <PrevNextArrows className="arrows"><i className="ri-arrow-left-s-line ri-4x" onClick={this.prevSlide}></i></PrevNextArrows>
                    <Slide1 dis={this.state.slideNo === 1 ? "flex" : "none"}/>
                    <Slide2 dis={this.state.slideNo === 2 ? "flex" : "none"}/>
                    <Slide3 dis={this.state.slideNo === 3 ? "flex" : "none"}/>
                    <PrevNextArrows className="arrows"><i className="ri-arrow-right-s-line ri-4x" onClick={this.nextSlide}></i></PrevNextArrows>
                </ContentContainer>
                <DotContainer>
                        <Dot color={this.state.slideNo === 1 ? "rgba(112, 112, 112, 1)"  : "rgba(255, 255, 255, 1)"}/>
                        <Dot color={this.state.slideNo === 2 ? "rgba(112, 112, 112, 1)"  : "rgba(255, 255, 255, 1)"}/>
                        <Dot color={this.state.slideNo === 3 ? "rgba(112, 112, 112, 1)"  : "rgba(255, 255, 255, 1)"}/>
                </DotContainer>
            </SlideshowContainer>
        );
    }
    
};

export default Slideshow;