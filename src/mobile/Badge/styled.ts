import {
  StyleSheet,
} from 'react-native';

import styled, {
  css,
} from 'styled-components/native';

// import {
//   Sizes,
// } from '../../constants';



export const BadgeStyle = css`
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 3px;
`;


export const BadgeButtonContainer = styled.TouchableOpacity`
  ${BadgeStyle};
`;

export const BadgeViewContainer = styled.View`
  ${BadgeStyle};
`;


export const TextBadge = styled.Text`
  color: white;
  padding-horizontal: 4px;
  font-size: 12px;
`;
