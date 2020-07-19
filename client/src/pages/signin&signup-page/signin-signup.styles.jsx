import styled from 'styled-components';
import{fade, Text} from '../../components/style-utils/utils.styles';

export const SigninAndSignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #EDF1F3;
    margin: 0;
    padding: 6em 0 ;
    width: 100%;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 0 0 0;
    margin : 1em 0 3em 25em;
    width: 39em;
    border-bottom: 1px solid rgba(112, 112, 112, 0.35);
    ${Text}{
        cursor: pointer;
    }
    .active{ 
        border-bottom: 3px solid green;
        animation: 2s ${fade} ease-out;
    }
`;