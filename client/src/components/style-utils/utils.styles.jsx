import styled, {keyframes} from 'styled-components';

export const CustomButton = styled.button`
    margin: 10px;
    padding: 0;
    border: none;
    width: 133px;
    height: 40px;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    font-family:"Open Sans";
    font-size: 16px;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    box-shadow:  0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

export const Text = styled.p`
    font: ${props => props.font};
    color: #060606;
    text-shadow: 0px 1px 3px #00000063;
    margin: 0;
    text-align: center;
`;

export const ImageContainer = styled.img`
    text-align: center;
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const fade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;