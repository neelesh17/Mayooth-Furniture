import React, {useState} from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import { ProductPageContainer, TextContainer, DesciptionContainer, 
    ProductContainer, RelatedProductContainer, QuantityContainer
 } from './productpage.styles';
import {ImageContainer, Text, CustomButton} from '../../components/style-utils/utils.styles';
import {ProductItem, NewItems} from '../../components/Items';
import SlideProducts from '../../components/slide-products/slide-product.component';

const ProductPage = ({addItem}) => {
    const {name, image, description, price, company} = ProductItem[0];
    ProductItem[0].quantity =0;

    let [User, setQuantity] = useState({
        quan: 1,
        clicked: 'no',
    });
    
    const {quan, clicked} = User;

    const handleClick = () => {
        setQuantity({...User, clicked: 'yes'})
        ProductItem[0].quantity = quan;
        addItem(ProductItem[0])
    }
    return(
    <ProductPageContainer>
        <ProductContainer>
            <ImageContainer src={image} width="50em" height="40em" />
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
                <Text font="24px/29px Raleway">{price}</Text>
                <QuantityContainer>
                    <i className="ri-subtract-line" onClick={() => {if(quan>1) setQuantity({...User, quan: quan-1})}}/>
                    <span>{quan}</span>
                    <i className="ri-add-line" onClick={() => setQuantity({quan: quan +1 })}/>
                </QuantityContainer>
                <CustomButton onClick={handleClick} backgroundColor="rgba(255, 255, 255, 1)" color="rgba(39, 149, 76, 1)" width="10em" height="2.7em">
                    {clicked==='yes'? <i className="ri-checkbox-circle-line ri-xl"></i> :<i className="ri-add-circle-line ri-xl"></i> }Add To Cart
                </CustomButton>
                <CustomButton backgroundColor="rgba(255, 255, 255, 1)" color="rgba(6, 6, 6, 1)" width="10em" height="2.7em">
                    <i className="ri-heart-line ri-xl"></i>Wishlist
                </CustomButton>
            </TextContainer>
        </ProductContainer>
        <RelatedProductContainer>
            <SlideProducts heading="Related" items={NewItems}/>
        </RelatedProductContainer>
    </ProductPageContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ProductPage);