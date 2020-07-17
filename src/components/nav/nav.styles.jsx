import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    width: 227px;
    height: 60%;
    padding: 15px 25px;
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
    i{
        padding: 0 0 0 15px;
    }
    span{
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
`;

 export const ButtonContainer = styled.div`
    padding: 5px;
    width: 1000px;
    height: 40px;
    display: flex;
    justify-content: space-between;
 `;