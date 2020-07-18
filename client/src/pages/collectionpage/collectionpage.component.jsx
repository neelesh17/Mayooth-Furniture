import React from 'react';
import {withRouter} from 'react-router-dom'

import { CollectionPageContainer, ProductContainer} from './collectionpage.styles';
import Product from '../../components/product/product.component';
import {Text} from '../../components/style-utils/utils.styles';

import {NewItems} from '../../components/Items';

const CollectionPage = ({match}) => (
    <CollectionPageContainer>
                {console.log(match)}
                <Text font="40px Raleway">Living Room</Text>
                <ProductContainer>
                    {
                        NewItems.map(Item => (
                                <Product Item={Item} />
                            ))
                    }
                </ProductContainer>
    </CollectionPageContainer>
);

export default withRouter(CollectionPage);