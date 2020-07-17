import styled  from 'styled-components';

export const SlideshowContainer = styled.div`
    height: 464px;
    width: 100%;
`;

export const ContentContainer = styled.div`
    margin: 2% 0 0 5%;
    margin-left: ;
    width: 1600px;
    height: 85%;
    display: flex;
    justify-content: space-between;
    &:hover .arrows{
        background: black;
        color:white;
    }
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

export const PrevNextArrows = styled.div`
    cursor: pointer;
    position: relative;
    top: 35%;
    width: auto;
    height: 16%;
    font-size: 100%;
    border-radius: 3px;
    user-select: none;
    transition: 0.4s ease;
`;