import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Slideshow from '../../components/slideshow/slideshow.component';
import SlideProducts from '../../components/slide-products/slide-product.component';
import InspirationProduct from '../../components/inspiration/inspiration.component';

import { selectProductByType } from '../../redux/products/products.selector';
import { HomePageContainer } from './homepage.styles'

const HomePage = ({newItems, clearenceItems}) => (
    <HomePageContainer>
        <Slideshow />
        <SlideProducts items={newItems} heading="New In Store"/>
        <InspirationProduct />
        <SlideProducts items={clearenceItems} heading="Clearence Deals"/>
    </HomePageContainer>
);

const mapStateToProps = createStructuredSelector ({
    newItems: selectProductByType("new"),
    clearenceItems: selectProductByType("clearence"),
})

export default connect(mapStateToProps)(HomePage);