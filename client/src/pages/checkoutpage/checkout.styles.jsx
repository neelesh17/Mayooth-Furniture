import styled from 'styled-components';
import {Text} from '../../components/style-utils/utils.styles';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    ${Text} {
        margin-top: 40px;
    }
    .total{
        margin-left: auto;
    }
    button{
    margin-left: auto;
    margin-top: 50px;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled(Text)`
    text-transform: capitalize;
    text-align: left;
    width: 23%;
    &:last-child {
    width: 8%;
    }
`;

export const TestWarningContainer = styled(Text)`
   
    color: red;
`;