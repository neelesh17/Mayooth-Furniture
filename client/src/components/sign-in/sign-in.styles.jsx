import styled from 'styled-components';
import{fade, Text} from '../style-utils/utils.styles';

export const SignUpContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5em;
`;

export const FormContainer = styled.form`
    width: 40em;
    height: auto;
    button{
        margin-left: 10em;
    }
    margin-right: 10em; 
`;

export const LogoContainer = styled.div`
    width: 17em;
    height: 17em;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 0 0 0;
    margin : 1em 0 3em 0;
    width: 40em;
    border-bottom: 1px solid rgba(112, 112, 112, 0.35);
    border-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
    ${Text}{
        cursor: pointer;
    }
    .active{ 
        border-bottom: 3px solid rgba(39, 149, 76, 1);
        animation: 2s ${fade} ease-out;
    }
`;