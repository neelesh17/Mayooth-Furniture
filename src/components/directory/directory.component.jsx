import React from 'react';

import Slideshow from '../slideshow/slideshow.component';
import SlideProducts from '../slide-products/slide-product.component';

import {DirectoryWrapper} from './directory.styles'

const Directory = () => (
    <DirectoryWrapper>
        <Slideshow />
        <SlideProducts />
    </DirectoryWrapper>
); 

export default Directory;