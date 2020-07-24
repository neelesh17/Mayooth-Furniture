import styled from 'styled-components';
import { fade, CustomButton, ImageContainer } from '../style-utils/utils.styles';

export const ProductContainer = styled.div`
    width: 28em;    
    height: auto;
    display: inline-block;
    margin: 0 3%;
    &:hover {
        img{
            opacity: 0.7;
        }
        button {
            opacity: 0.85;
        }
    }
  
    animation: 1s ${fade} ease-out;
`;

export const Button = styled(CustomButton)`
    position: relative;
    top: -100px;
    display: block;
    opacity: 0;
    transition: 0.5s ease;
`;

export const Image = styled(ImageContainer)`
    transition: 0.5s ease;
`;