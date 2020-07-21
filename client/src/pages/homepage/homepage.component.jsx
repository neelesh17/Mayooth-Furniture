import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Slideshow from '../../components/slideshow/slideshow.component';
import SlideProducts from '../../components/slide-products/slide-product.component';
import InspirationProduct from '../../components/inspiration/inspiration.component';

import { selectHomepageitems } from '../../redux/homepage/homepage.selector';
import { HomePageContainer } from './homepage.styles'

const HomePage = ({items}) => (
    <HomePageContainer>
        <Slideshow />
        <SlideProducts items={items} type="new" heading="New In Store"/>
        <InspirationProduct />
        <SlideProducts items={items} type="clearence" heading="Clearence Deals"/>
    </HomePageContainer>
);

const mapStateToProps = createStructuredSelector ({
    items: selectHomepageitems,
})

export default connect(mapStateToProps)(HomePage);