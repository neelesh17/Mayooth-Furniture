import styled from 'styled-components';
import { Text} from '../../components/style-utils/utils.styles';


export const ProductPageContainer = styled.div`
    background-color: #EDF1F3;
    margin: 0;
    width: 100%;
    padding: 2em 0;
    
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const RelatedProductContainer = styled.div`
    margin-top: 5em;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${Text}{
        text-align: start;
    }
    padding-left: 4em;
    width: 30%;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const DesciptionContainer = styled.div`
    width: 25em;
`;

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4em;
    height: 1.5em;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(112, 112, 112, 1);
    border-radius: 10px;
    opacity: 1;
    i{
        cursor:pointer;
    }
`;