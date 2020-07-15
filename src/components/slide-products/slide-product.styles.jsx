import styled from 'styled-components';
import {CustomButton ,ImageContainer}  from '../style-utils/utils.styles'

export const ProductSlide = styled.div`
    width: 100%;
    height: 450px;
`;

export const ProductContainer = styled.div`
    height: 500px;
    width: 1366px;
    margin: 10px 277px;
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
    transition: 1s ease;
`;

export const Image = styled(ImageContainer)`
    transition: 1s ease;
`;