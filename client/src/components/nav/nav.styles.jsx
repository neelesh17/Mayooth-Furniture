import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fade } from '../style-utils/utils.styles';

export const NavContainer = styled.div`
    height: 77px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.7);
    @media screen and (max-width: 800px) {
        height: 60px;
    }
`;

export const LogoContainer = styled(Link)`
    width: 15em;
    height: 60%;
    padding: 15px 0 0 25px ;
    text-align: center;
    @media screen and (max-width: 800px) {
        width: 170px;
        padding: 10px;
    }
`;

export const IconContainer = styled.div`
    font-size: 40px;
    display: flex;
    padding: 15px 30px;
    justify-content: flex-end;
    color: white;
    .icon{
        padding: 0 15px 0 15px;
    }
    .search{
        height: 45px;
        width: 45px;
        background-color: rgba(255,255,255,1);
        border-radius: 50%;
        color: black;
        text-align: center;
        font-size:20px;
        line-height: 45px;
        i{
            padding: 0;
        }
    }
    
`; 
export const Icons = styled(Link)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: width 2s linear;
    animation: ${fade} 1s ease-out;
`;

 export const ButtonContainer = styled.div`
    padding: 5px;
    width: 1000px;
    height: 40px;
    display: flex;
    justify-content: space-between;
 `;