import styled from 'styled-components/native';

import {
  Platform,
} from 'react-native';



interface IProps {
  color?: string;
}



const Title = styled.Text`
  margin-top: ${Platform.select({ android: '-2px', ios: '1px' })};
  color: ${(props: IProps) => props.color || 'white'};
  font-size: 20px;
  font-weight: 700;
`;



export default Title;
