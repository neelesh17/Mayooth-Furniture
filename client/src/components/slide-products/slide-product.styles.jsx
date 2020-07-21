import styled from 'styled-components';
import {fade} from '../style-utils/utils.styles';


export const ProductSlide = styled.div`
    width: 100%;
    height: auto;
`;

export const ProductContainer = styled.div`
    height: auto;
    width: fit-content;
    margin: 2% 5%;
    display: flex;
    justify-content: start;
    animation: 1s ${fade} ease-out;
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
    &.next{
        left: 100em; 
    }
`;
