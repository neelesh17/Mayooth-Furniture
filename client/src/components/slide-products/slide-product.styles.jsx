import styled from 'styled-components';
import {CustomButton ,ImageContainer}  from '../style-utils/utils.styles';

import {fade} from '../style-utils/utils.styles';

export const ProductSlide = styled.div`
    width: 100%;
    height: auto;
`;

export const ProductContainer = styled.div`
    height: 350px;
    width: 1600px;
    margin: 2% 5%;
    display: flex;
    justify-content: end;
`;
export const Product = styled.div`
    height: 100%;
    width: 429px;
    text-align: start;
    margin: 0 3%;
    &:hover {
        img{
            opacity: 0.7;
        }
        button {
            opacity: 0.85;
            display: inline-block;
        }
    }
    animation: 2s ${fade} ease-out;
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
    opacity: ${props => props.opacity};
    cursor: pointer;
    position: relative;
    top: 7em;
    width: auto;
    height: 14%;
    font-size: 100%;
    color: rgba(112, 112, 112, 1);
    user-select: none;
    transition: 0.4s ease;
`;
