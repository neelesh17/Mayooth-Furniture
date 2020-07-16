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

export const TextConatiner = styled.div`
    padding: 48px 0 0 0;
    text-align: center;
    width: 50%;
    height: 70%;
`;


export const DotContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 15%;
    width: 72px;
    margin-left: 47%;
`;

export const Dot = styled.span`
    width: 12px;
    height:12px;
    margin: 0px 0;
    background-color: ${props => props.color};
    border-radius: 50%;
    border: 1px solid rgba(112, 112, 112, 1);
    
`;

export const PrevNextArrows = styled.a`
    cursor: pointer;
    margin-top: 12%;
    width: auto;
    height: 14%;
    font-size: 350%;
    border-radius: 3px;
    user-select: none;
    transition: 0.4s ease;
`;

