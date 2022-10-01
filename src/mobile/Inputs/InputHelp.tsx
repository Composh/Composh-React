import React from 'react';

import {
  HelpContainerViewStyle,
  HelpTextComponentStyle,
  HelpCountTextStyle,
} from './styled';



interface IProps {

  // Props Help
  noHelp?: boolean;
  helpText?: string;
  helpTextStyle?: any;

  // Props Count Letter
  noCount?: boolean;
  countLimit?: any; // string || number;
  helpCountStyle?: any;

  text: string;
}



const InputHelp: React.FC<IProps> = (props: any) => {
  return (

    <HelpContainerViewStyle>

      <HelpTextComponentStyle
        style={props.helpTextStyle}>
        {!props.noHelp && props.helpText}
      </HelpTextComponentStyle>



      <HelpCountTextStyle
        style={props.helpCountStyle}>
        {isNaN(props.countLimit)
          ? props.countLimit
          : props.text.length + ' / ' + props.countLimit || 20
        }
      </HelpCountTextStyle>

    </HelpContainerViewStyle>

  );
};



export default InputHelp;
