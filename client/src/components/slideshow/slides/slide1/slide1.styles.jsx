import styled, {keyframes } from 'styled-components';

export const slide = keyframes`
    0%{left: 20em;}
    100% { left: 14em; }
`;

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