import styled, {keyframes} from 'styled-components';
import { fade, CustomButton, ImageContainer } from '../style-utils/utils.styles';

const slide = keyframes`
    0%{
      transform: translate3d(0, 0, 0);
    }
    100%{
      transform: translate3d(-1692px, 0, 0);
    }
`;

export const ProductContainer = styled.div`
    width: 32em;    
    height: auto;
    margin:0 3%;
    display: block;
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