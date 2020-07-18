import styled from 'styled-components';

import { Text} from '../style-utils/utils.styles'

export const InspirationContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    padding-bottom: 3%;
`;

export const TextContainer = styled.div`
    padding-top: 7%;
    margin-right: 4%;
`;

export const InspireText = styled(Text)`
    padding-top: 8%;
    text-shadow: none;
    &.more-info{
        text-decoration: underline;
        cursor: pointer;
        :hover {
            color: rgba(76, 179, 170, 1);
        }
    }
`