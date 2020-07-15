import styled from 'styled-components';

export const SlideshowContainer = styled.div`
    height: 464px;
    width: 100%;
    &:hover div a{
        background: black;
        color:white;
    }
`;

export const ContentContainer = styled.div`
    margin: 2% 0 0 14%;
    margin-left: ;
    width: 1366px;
    height: 85%;
    display: flex;
    justify-content: space-between;
`;


export const ImageContainer = styled.img`
    text-align: center;
    width: 568px;
    height: 358px;
`;

export const TextConatiner = styled.div`
    padding: 48px 0 0 0;
    text-align: center;
    width: 50%;
    height: 70%;
`;

export const Text = styled.p`
    font: ${props => props.font};
    color: #060606;
    text-shadow: 0px 1px 3px #00000063;
    margin: 0;
`;

export const Button = styled.button`
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
    color: rgba(255, 255, 255, 1);
    background-color: rgba(204, 76, 110, 1);
    box-shadow:  0 1px 3px rgba(0, 0, 0, 0.2);
    text-decoration: none;
`;

export const DotContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5%;
    width: 72px;
    margin-left: 45%;
`;

export const Dot = styled.span`
    margin: 0 2px;
    width: 12px;
    height:12px;
    background-color: ${props => props.color};
    border-radius: 50%;
    border: 1px solid rgba(112, 112, 112, 1);
    
`;

export const PrevNextArrows = styled.a`
    cursor: pointer;
    margin-top: 12%;
    width: auto;
    height: 10%;
    font-weight: bold;
    font-size: 30px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    transition: 0.4s ease;
`;

