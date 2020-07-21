import styled from 'styled-components';

import { Text } from '../style-utils/utils.styles';

export const FooterContainer = styled.div`
    width: 95%;
    height: auto;
    background-color: rgba(76, 179, 170, 1);
    display: flex;
    padding-left: 5%;
`;

export const FooterServiceContainer = styled.div`
    padding: 17px 89px;
`

export const FooterTextContainer = styled(Text)`
    color: white;
    text-shadow: none;
    padding-bottom: 6px;
    text-align: left;
    &.heading {
        padding-bottom: 16px;
        cursor: auto;
    }
    cursor: pointer;
`;
export const FooterIconContainer = styled.div`
    height: 30px;
    position: relative;
    top: 1em;
    left: 40%;
    font-size: 100%;
    color: white;
    cursor:pointer;
`;

export const FooterLogoContainer = styled.div`
    height: 50%;
    position: relative;
    top: 5em;
    left: 33%;
`;