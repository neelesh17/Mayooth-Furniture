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
    width: 226.62px;
    height: 100%;
    padding: 25px;
`;