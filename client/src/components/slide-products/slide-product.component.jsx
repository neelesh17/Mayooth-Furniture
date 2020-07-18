import React from 'react';

import { ProductSlide ,Image, ProductContainer, Product, Button, Arrows } from './slide-product.styles';
import { Text } from '../style-utils/utils.styles';

class SlideProducts extends React.Component{
    constructor({ heading, items }){
        super();
        this.state = {
            heading: heading,
            items: items,
            from: 0,
            to: 3,
        }
        this.prev = () => {
            if(this.state.to - this.state.from < 3){
                this.setState({from: this.state.from - (2 + this.state.to - this.state.from), to: this.state.to - (this.state.to - this.state.from)});
            }
            else if(this.state.from === 0 && this.state.items.length %3 !== 0){
                this.setState({from: this.state.items.length - (this.state.items.length%3), to: this.state.items.length});
            } else if (this.state.from <= 0){
                this.setState({from: this.state.items.length  - 3, to: this.state.items.length});
            } else {
                this.setState({from: this.state.from - 3, to: this.state.to - 3});
            }
        }
        this.next = () => {
            if(this.state.to  === this.state.items.length){
                this.setState({from: 0, to: 3});
            } else if(this.state.to + 3 > this.state.items.length){
                this.setState({from: this.state.from + 3, to: this.state.items.length});
            } else {
                this.setState({from: this.state.from + 3, to: this.state.to + 3});
            }
        }
    }
    render(){
        return (
            <ProductSlide>
                <Text font="40px Raleway">{this.state.heading}</Text>
                <ProductContainer>
                    <Arrows opacity={this.state.from === 0 ? "0" : "1"}><i className="ri-arrow-left-s-line ri-4x" onClick={this.prev}></i></Arrows>
                    {
                        this.state.items.filter((item, id) => (id >= this.state.from && id < this.state.to)).map(Item => (
                                <Product>
                                    <Image src={Item.image} height="286px" width="100%" />
                                    <Text font="16px Open Sans">{Item.name}</Text>
                                    <Text font="16px Open Sans">{Item.price}</Text>
                                    <Button color="rgba(255, 255, 255, 1)" backgroundColor="rgba(204, 76, 110, 1)">Shop</Button>
                                </Product>
                            ))
                    }
                    <Arrows opacity={this.state.to >= this.state.items.length ? "0" : "1"} ><i className="ri-arrow-right-s-line ri-4x" onClick={this.next}></i></Arrows>
                </ProductContainer>
            </ProductSlide>
        );
    }
    
}

export default SlideProducts;