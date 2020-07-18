import React from 'react';

import Slideshow from '../../components/slideshow/slideshow.component';
import SlideProducts from '../../components/slide-products/slide-product.component';
import InspirationProduct from '../../components/inspiration/inspiration.component';

import {HomePageContainer} from './homepage.styles'

import { NewItems, ClearenceItems } from '../../components/Items';

const HomePage = () => (
    <HomePageContainer>
        <Slideshow />
        <SlideProducts items={NewItems} heading="New In Store"/>
        <InspirationProduct />
        <SlideProducts items={ClearenceItems} heading="Clearence Deals"/>
    </HomePageContainer>
);


export default HomePage;