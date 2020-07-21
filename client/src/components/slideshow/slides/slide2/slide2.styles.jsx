import styled from 'styled-components';

import { slide } from '../slide1/slide1.styles';


export const TextConatiner = styled.div`
    padding: 48px 0 0 0;
    text-align: center;
    width: 50%;
    height: 70%;
`;

export const SlideContainer = styled.div`
    display: ${props => props.display};
    justify-content:space-around;
    width: 1366px;
    position: absolute;
    animation: ${slide} 1s forwards;
`;
