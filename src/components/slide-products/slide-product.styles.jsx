import styled from 'styled-components';
import {CustomButton ,ImageContainer}  from '../style-utils/utils.styles'

export const ProductSlide = styled.div`
    width: 100%;
    height: auto;
`;

export const ProductContainer = styled.div`
    height: auto;
    width: 1600px;
    margin: 2% 5%;
    display: flex;
    justify-content: space-between;
   
`;
export const Product = styled.div`
    height: 100%;
    width: 429px;
    text-align: center;
    &:hover {
        img{
            opacity: 0.7;
        }
        button {
            opacity: 0.85;
            display: inline-block;
            
        }
    }
`;

export const Button = styled(CustomButton)`
    position: relative;
    top: -100px;
    display: none;
    transition: 0.5s ease;
`;

export const Image = styled(ImageContainer)`
    transition: 0.5s ease;
`;

export const Arrows = styled.div`
    cursor: pointer;
    position: relative;
    top: 6em;
    width: auto;
    height: 14%;
    font-size: 100%;
    color: rgba(112, 112, 112, 1);
    user-select: none;
    transition: 0.4s ease;
`;
