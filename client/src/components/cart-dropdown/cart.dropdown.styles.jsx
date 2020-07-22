import styled from 'styled-components';
import {CustomButton} from '../style-utils/utils.styles';

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: auto 0;
`;

export const CartItemsContainer = styled.div`
    height: 7em;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    overflow-y: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
   margin: 10px auto 0 auto;
`;


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 8em;
    height: 9em;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    color: black;
    top: 90px;
    right: 40px;
    z-index: 5;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.4);
`;

export const CartDropdownHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    font-size: 20px;
`;
