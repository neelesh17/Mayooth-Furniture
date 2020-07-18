import React from 'react';

import Slideshow from '../slideshow/slideshow.component';
import SlideProducts from '../slide-products/slide-product.component';
import InspirationProduct from '../inspiration/inspiration.component';

import {DirectoryWrapper} from './directory.styles'

import { NewItems, ClearenceItems } from '../Items';

const Directory = () => (
    <DirectoryWrapper>
        <Slideshow />
        <SlideProducts items={NewItems} heading="New In Store"/>
        <InspirationProduct />
        <SlideProducts items={ClearenceItems} heading="Clearence Deals"/>
    </DirectoryWrapper>
); 

export default Directory;