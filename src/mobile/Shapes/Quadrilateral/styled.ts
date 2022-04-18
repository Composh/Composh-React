import styled from 'styled-components/native';

import {
  Colors,
  Metrics,
} from '~/common/constants';



export const QuadriShape = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  flex: 1;
  border-right-width: 60px;
  border-right-color: transparent;
  border-style: solid;
  z-index: 2;
`;
