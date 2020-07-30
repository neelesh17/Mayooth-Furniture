import React from "react";
import {Link} from 'react-router-dom';

import { Image, ProductContainer, Button} from './product.styles';

import {Text} from '../../components/style-utils/utils.styles';


const Product = ({item}) => {
    return(
    <ProductContainer >
        <Image src={item.image} height="286px" width="100%" />
        <Text font="16px Open Sans">{item.name}</Text>
        <Text font="16px Open Sans">${item.price}</Text>
        <Link to={`/shop/${item.tag}/${item.id}`} style={{"textDecoration": "none"}}>
            <Button color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)">Buy</Button>
        </Link>
    </ProductContainer>
)};

export default Product;