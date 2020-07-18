import styled from 'styled-components';

export const ProductSlide = styled.div`
    width: 100%;
    height: auto;
`;

export const ProductContainer = styled.div`
    height: auto;
    width: 1600px;
    margin: 2% 5%;
    display: flex;
    justify-content: end;
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
`;
