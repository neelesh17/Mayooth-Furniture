import React from 'react';
import {connect} from 'react-redux';

import {selectCategoryProducts} from '../../redux/products/products.selector';

import { CollectionPageContainer, ProductContainer} from './collectionpage.styles';
import Product from '../../components/product/product.component';
import {Text} from '../../components/style-utils/utils.styles';

const CollectionPage = ({items}) => (
    <CollectionPageContainer>
        <Text font="40px Raleway">{items[0].tag.toUpperCase()}</Text>
        <ProductContainer>
            {
                items.map(item => (
                        <Product key={item._id} item={item} />
                    ))
            }
        </ProductContainer>
    </CollectionPageContainer>
);

const mapStateToProps = ( state, ownProps) => ({
    items: selectCategoryProducts(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);