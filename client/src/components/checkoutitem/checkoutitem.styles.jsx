import styled from 'styled-components';

import {Text} from '../style-utils/utils.styles';

export const DetailContainer = styled(Text)`
  width: 23%;
  display:flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 0 10px;
  }
  &:last-child {
    width: 8%;
  }
`;
export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    align-items: center;
    text-align: center;
    i {
        cursor: pointer;
      }
`;