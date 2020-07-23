import React from "react";
import {withRouter} from 'react-router-dom';

import { Image, ProductContainer, Button} from './product.styles';

import {Text} from '../../components/style-utils/utils.styles';


const Product = ({item, history}) => (
    <ProductContainer >
        <Image src={item.image} height="286px" width="100%" />
        <Text font="16px Open Sans">{item.name}</Text>
        <Text font="16px Open Sans">${item.price}</Text>
        <Button color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)" onClick={()=> history.push("/product")}>Buy</Button>
    </ProductContainer>
);

export default withRouter(Product);