import React from "react";
import {withRouter} from 'react-router-dom';

import { Image, ProductContainer, Button} from './product.styles';

import {Text} from '../../components/style-utils/utils.styles';


const Product = ({Item, history}) => (
    <ProductContainer >
        <Image src={Item.image} height="286px" width="100%" />
        <Text font="16px Open Sans">{Item.name}</Text>
        <Text font="16px Open Sans">{Item.price}</Text>
        <Button color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)" onClick={()=> history.push("/product")}>Buy</Button>
    </ProductContainer>
);

export default withRouter(Product);