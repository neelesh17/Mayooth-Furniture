import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    height: 115px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.7);
`;

export const LogoContainer = styled(Link)`
    position: relative;
    padding-top: 0.625em;
    padding-left: 17.25em;
    width: 14.1875em;
    height: 100%;
`;

export const UserIconContainer = styled.div`
    position: absolute;
    top: 10px;
    left: 1544px;
    font-size: 43px;
    color: white;
`;
export const CartIconContainer = styled.div`
    position: absolute;
    top: 14px;
    left: 1600px;
    font-size: 35px;
    color: white;
`;

 export const InputContainer = styled.input`
    position: absolute;
    top: 13px;
    left: 581px;
    width: 866px;
    height: 38px;
    border: None;
    border-radius: 20px;
 `;

 export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 62px;
    left: 280px;
    width: 1373px;
    height: 40px;
 `;

 export const Button = styled(Link)`
    width: 133px;
    height: 40px;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    font: Regular 16px Open Sans;
    color: rgba(39, 149, 76, 1);
    background-color: rgba(255, 255,255, 1);
    box-shadow:  0 1px 3px rgba(0, 0, 0, 0.2);
 `;