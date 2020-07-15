import React from 'react';

import { ProductSlide ,Image, ProductContainer, Product, Button } from './slide-product.styles';
import { Text, } from '../style-utils/utils.styles';

import image1 from '../../images/product 1.png';
import image2 from '../../images/product2.png';
import image3 from '../../images/product3.png';

let Products = [{
        image: image1,
        name: "White and Brown Sideboard",
        price: "$50"
    },
    {
        image: image2,
        name: "Orange plastic Armchairs",
        price: "$20"
    },
    {
        image: image3,
        name: "White wooden dinning room set",
        price: "$90"
    }
];
const SlideProducts = () => (
    <ProductSlide>
        <Text font="40px Raleway">New In Store</Text>
        <ProductContainer>
            {
                Products.map(Item => (
                        <Product>
                            <Image src={Item.image} height="286px" width="100%" />
                            <Text font="16px Open Sans">${Item.name}</Text>
                            <Text font="16px Open Sans">${Item.price}</Text>
                            <Button color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)">Shop</Button>
                        </Product>
                    ))
            }
        </ProductContainer>
        
        
    </ProductSlide>
);

export default SlideProducts;