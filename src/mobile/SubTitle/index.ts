import styled from 'styled-components/native';

import {
  Platform,
} from 'react-native';



export interface IProps {
  color?: string;
}



const SubTitle = styled.Text`
  margin-top: ${Platform.select({ android: '1px', ios: '1px' })};
  color: ${(props: IProps) => props.color || 'gray'};
  font-size: 12px;
  font-weight: 500;
`;



export default SubTitle;
