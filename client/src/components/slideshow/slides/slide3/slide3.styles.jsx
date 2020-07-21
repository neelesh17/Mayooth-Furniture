import styled from 'styled-components';

import { slide } from '../slide1/slide1.styles';

export const TextConatiner = styled.div`
    padding: 48px 0 0 0;
    text-align: center;
    height: 70%;
`;

export const SlideContainer = styled.div`
    display: ${props => props.display};
    justify-content:space-around;
    width: 1366px;
    height: 95%;
    // background-image: radial-gradient(#eeaeca, #94bbe9);
    background-color: #e3e3e3;
    position: absolute;
    height: 40%;
    animation: ${slide} 1s forwards;
`;
