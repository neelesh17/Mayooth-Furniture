import styled from 'styled-components';

export const ImageConatiner = styled.img`
    width: 30%;
`;

export const ItemDetailContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
  
    justify-content: center;
    padding: 10px 10px;
    font-size: 15px;
    div{
        display: flex;
        justify-content: space-between;
    }
`;

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-top: 15px;
    &:after {
        bottom: 100%;
        left: 89%;
        border: solid transparent;
        content: " ";
        position: absolute;
        pointer-events: none;
        border-bottom-color: white;
        border-width: 8px;
        margin-left: -8px;
    }
`; 