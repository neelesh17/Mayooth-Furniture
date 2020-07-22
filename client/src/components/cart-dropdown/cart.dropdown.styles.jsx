import styled,{keyframes} from 'styled-components';
import {CustomButton} from '../style-utils/utils.styles';

const slideDown = keyframes`
	0% {
        height:0;
	}
	100% {
		height:25em;
	}		
`;
export const CartDropdownHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    font-size: 20px;
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: auto 0;
`;

export const CartItemsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin: 2em auto;
`;


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 20em;
    height: 25em;
    display: flex;
    flex-direction: column;
    padding: 1.3em;
    padding-bottom: 0;
    border: 1px solid black;
    background-color: white;
    color: black;
    top: 5em;
    right: 4em;
    z-index: 5;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.4);
    animation: ${slideDown} .6s ease;
`;
