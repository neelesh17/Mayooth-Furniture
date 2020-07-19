import styled from 'styled-components';
import{fade} from '../style-utils/utils.styles';

export const SignUpContainer = styled.div`
    display: flex;
    justify-content: center;
    animation: 2s ${fade} ease-out;
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