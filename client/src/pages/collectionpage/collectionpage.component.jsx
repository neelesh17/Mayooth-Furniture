import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectLivingRoomProducts} from '../../redux/products/products.selector';

import { CollectionPageContainer, ProductContainer} from './collectionpage.styles';
import Product from '../../components/product/product.component';
import {Text} from '../../components/style-utils/utils.styles';

const CollectionPage = ({items}) => (
    <CollectionPageContainer>
                <Text font="40px Raleway">Living Room</Text>
                <ProductContainer>
                    {
                        items.map(item => (
                                <Product key={item.id} item={item} />
                            ))
                    }
                </ProductContainer>
    </CollectionPageContainer>
);

const mapStateToProps = createStructuredSelector({
    items: selectLivingRoomProducts,
});

export default connect(mapStateToProps)(CollectionPage);