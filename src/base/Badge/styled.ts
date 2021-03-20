import {
  StyleSheet,
} from 'react-native';

import styled from 'styled-components/native';

import {
  Sizes,
} from '../../constants';



export const BadgeContainer = styled.View`
  align-self: flex-start;
`;


export const BadgeButtonContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 3px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: white;
`;

export const BadgeViewContainer = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 3px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: white;
`;


export const TextBadge = styled.Text`
  color: white;
  padding-horizontal: 4px;
  font-size: 12px;
`;
