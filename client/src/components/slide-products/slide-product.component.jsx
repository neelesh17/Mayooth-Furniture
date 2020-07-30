import React from 'react';
import Whirligig from 'react-whirligig';

import Product from '../product/product.component';

import { ProductSlide , ProductContainer, Arrows } from './slide-product.styles';
import { Text } from '../style-utils/utils.styles';

const SlideProducts = ({ heading, items }) => {
    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();
    let arrowOpacity = 1;
    if(items.length === 3){
        arrowOpacity =0;
    }
    return (
        
        <ProductSlide>
            <Text font="40px Raleway">{heading}</Text>
            <ProductContainer >
                <Arrows opacity= {arrowOpacity}><i className="ri-arrow-left-s-line ri-4x" onClick={prev}></i></Arrows>
                <Whirligig
                    visibleSlides={3}
                    gutter="4em"
                    ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
                    preventScroll="true"
                    infinite="true"
                >
                    {
                        items.map(item => {
                                item.id = item._id;
                                item.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.";
                                return(<Product key={item.id} item={item} dis="inline-block"/>)
                            })
                    }
                </Whirligig>
                
                <Arrows opacity= {arrowOpacity} ><i className="ri-arrow-right-s-line ri-4x" onClick={next}></i></Arrows>
            </ProductContainer>
        </ProductSlide>
    );
}

export default SlideProducts;