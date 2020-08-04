import styled from 'styled-components';
import {Text} from '../../components/style-utils/utils.styles';

export const CheckoutPageContainer = styled.div`
    width: 75%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    .total{
        margin-left: auto;
    }
    .checkout{
        margin-left: auto;
        margin-top: 50px;
    }
    #heading{
        margin-bottom: 1em;
    }
    padding-bottom: 10em;
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
    text-align: center;
    width: 23%;
    &:last-child {
        width: 8%;
    }
`;