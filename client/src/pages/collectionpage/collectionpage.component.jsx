import React from 'react';

import { CollectionPageContainer, ProductContainer} from './collectionpage.styles';
import Product from '../../components/product/product.component';
import {Text} from '../../components/style-utils/utils.styles';

import {NewItems} from '../../components/Items';

const CollectionPage = () => (
    <CollectionPageContainer>
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

export default CollectionPage;