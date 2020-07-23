import React, {useState} from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';
import { selectProduct, selectRelatedProducts} from '../../redux/products/products.selector';

import { ProductPageContainer, TextContainer, DesciptionContainer, 
    ProductContainer, RelatedProductContainer, QuantityContainer
 } from './productpage.styles';
import {ImageContainer, Text, CustomButton} from '../../components/style-utils/utils.styles';
import SlideProducts from '../../components/slide-products/slide-product.component';

const ProductPage = ({product, addItem, related}) => {
    const {name, image, description, price, company} = product;

    let [User, setQuantity] = useState({
        quan: 1,
        clicked: 'no',
    });
    
    const {quan, clicked} = User;
    
    const handleClick = () => {
        addItem(product, quan);
        setQuantity({quan: 1, clicked: 'yes'});
    }
    return(
    <ProductPageContainer>
        <ProductContainer>
            <ImageContainer src={image} width="50em" height="40em"/>
            <TextContainer>
                <div>
                    <Text font="40px Raleway">{company}</Text>
                    <Text font="16px Open Sans">{name}</Text>
                </div>
                <div>
                    <Text font="24px/29px Raleway">Description</Text>
                    <DesciptionContainer>
                        <Text font="16px/24px Open Sans">{description}</Text>
                    </DesciptionContainer>
                </div>
                <Text font="24px/29px Raleway">${price}/per piece</Text>
                <QuantityContainer>
                    <i className="ri-subtract-line" onClick={() => {if(quan>1) setQuantity({ quan: quan-1})}}/>
                    <span>{quan}</span>
                    <i className="ri-add-line" onClick={() => setQuantity({quan: quan+1 })}/>
                </QuantityContainer>
                <CustomButton onClick={handleClick} backgroundColor="rgba(255, 255, 255, 1)" color="rgba(39, 149, 76, 1)" width="10em" height="2.7em">
                    {clicked==='yes'? <i className="ri-checkbox-circle-line ri-xl"></i> :<i className="ri-add-circle-line ri-xl"></i> }Add To Cart
                </CustomButton>
                <CustomButton backgroundColor="rgba(255, 255, 255, 1)" color="rgba(6, 6, 6, 1)" width="10em" height="2.7em">
                    <i className="ri-heart-line ri-xl"></i>Wishlist
                </CustomButton>
            </TextContainer>
        </ProductContainer>
        <RelatedProductContainer >
            <SlideProducts heading="Related" items={related} />
        </RelatedProductContainer>
    </ProductPageContainer>
)};

const mapStateToProps = (state, ownProps) => ({
    product: selectProduct(ownProps.match.params.productId)(state)[0],
    related: selectRelatedProducts(ownProps.match.params.collectionId, ownProps.match.params.productId)(state)
});

const mapDispatchToProps = dispatch => ({
    addItem: (item,quan) => dispatch(addItem(item, quan))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);