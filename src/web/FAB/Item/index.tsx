import React from 'react';

import {
  FabItemContainer,
} from './styled';



export interface IProps {
  color?: any;
  text?: any;
  textColor?: any;
  textBackground?: any;
  icon?: any;
  onPress?: any;
}



const FABItem: React.FC<IProps> = (props: IProps) => {
  return <FabItemContainer />;
};



export default FABItem;
