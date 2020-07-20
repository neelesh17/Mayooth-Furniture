import React, {useState} from 'react';

import { ProductPageContainer, TextContainer, DesciptionContainer, 
    ProductContainer, RelatedProductContainer, QuantityContainer
 } from './productpage.styles';
import {ImageContainer, Text, CustomButton} from '../../components/style-utils/utils.styles';

import {ProductItem, NewItems} from '../../components/Items';
import SlideProducts from '../../components/slide-products/slide-product.component';

const ProductPage = () => {
    const {name, image, description, price, company} = ProductItem;
    let [User, setQuantity] = useState({
        quantity: 1,
    });

    const {quantity} = User;
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
                    <i class="ri-subtract-line" onClick={() => {if(quantity>1) setQuantity({quantity: quantity-1})}}/>
                    <span>{quantity}</span>
                    <i class="ri-add-line" onClick={() => setQuantity({quantity: quantity +1 })}/>
                </QuantityContainer>
                <CustomButton backgroundColor="rgba(255, 255, 255, 1)" color="rgba(39, 149, 76, 1)" width="10em" height="2.7em">
                    <i class="ri-add-circle-line ri-xl"></i>Add To Cart
                </CustomButton>
                <CustomButton backgroundColor="rgba(255, 255, 255, 1)" color="rgba(6, 6, 6, 1)" width="10em" height="2.7em">
                    <i class="ri-heart-line ri-xl"></i>Wishlist
                </CustomButton>
            </TextContainer>
        </ProductContainer>
        <RelatedProductContainer>
            <SlideProducts heading="Related" items={NewItems}/>
        </RelatedProductContainer>
    </ProductPageContainer>
)};

export default ProductPage;