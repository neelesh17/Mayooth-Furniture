import React ,{ useState }from 'react';

import Product from '../product/product.component';

import { ProductSlide , ProductContainer, Arrows } from './slide-product.styles';
import { Text } from '../style-utils/utils.styles';

const SlideProducts = ({ heading, items, type }) => {
    const [slideState, setSliteState] = useState({
        from: 0,
        to: 3,
    });

    let {from, to} = slideState;

    const filteredItems = items.filter((item, id) => (item.type === type));

    const prev = () => {
        if(to - from < 3){
            setSliteState({from: from - (2 + to - from), to: to - (to - from)});
        }
        else if(from === 0 && filteredItems.length %3 !== 0){
            setSliteState({from: filteredItems.length - (filteredItems.length%3), to: filteredItems.length});
        } else if (from <= 0){
            setSliteState({from: filteredItems.length  - 3, to: filteredItems.length});
        } else {
            setSliteState({from: from - 3, to: to - 3});
        }
    }
    const next = () => {
        if(to  === filteredItems.length){
            setSliteState({from: 0, to: 3});
        } else if(to + 3 > filteredItems.length){
            setSliteState({from: from + 3, to: filteredItems.length});
        } else {
            setSliteState({from: from + 3, to: to + 3});
        }
    }
    return (
        <ProductSlide>
            <Text font="40px Raleway">{heading}</Text>
            <ProductContainer>
                <Arrows opacity={from === 0 ? "0" : "1"}><i className="ri-arrow-left-s-line ri-4x" onClick={prev}></i></Arrows>
                {
                    filteredItems.slice(from,to).map(item => (
                            <Product Item={item} dis="inline-block"/>
                        ))
                }
                <Arrows opacity={to >= filteredItems.length? "0" : "1"} ><i className="ri-arrow-right-s-line ri-4x" onClick={next}></i></Arrows>
            </ProductContainer>
        </ProductSlide>
    );
}

export default SlideProducts;