import React from 'react';

import { ProductSlide ,Image, ProductContainer, Product, Button, Arrows } from './slide-product.styles';
import { Text } from '../style-utils/utils.styles';

const SlideProducts = ({ heading, items }) => (
    <ProductSlide>
        <Text font="40px Raleway">{heading}</Text>
        <ProductContainer>
            <Arrows><i class="ri-arrow-left-s-line ri-4x"></i></Arrows>
            {
                items.map(Item => (
                        <Product>
                            <Image src={Item.image} height="286px" width="100%" />
                            <Text font="16px Open Sans">{Item.name}</Text>
                            <Text font="16px Open Sans">{Item.price}</Text>
                            <Button color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)">Shop</Button>
                        </Product>
                    ))
            }
            <Arrows><i class="ri-arrow-right-s-line ri-4x"></i></Arrows>
        </ProductContainer>
        
        
    </ProductSlide>
);

export default SlideProducts;