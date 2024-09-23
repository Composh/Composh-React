import React from 'react';

import {
  HelpContainerViewStyle,
  HelpTextComponentStyle,
  HelpCountTextStyle,
} from './styled';



export interface IProps {
  // Props Text
  helpTextValue?: string;

  // Props Help
  noHelp?: boolean;
  helpText?: string;
  helpTextStyle?: any;

  // Props Count Letter
  noCount?: boolean;
  countLimit?: string | number;
  helpCountStyle?: any;
}



const InputHelp: React.FC<IProps> = (props: IProps) => {
  const className = { ...props } as any;



  return (

    <HelpContainerViewStyle
      className={className?.className}>

      <HelpTextComponentStyle
        style={props.helpTextStyle}>
        {!props.noHelp && props.helpText}
      </HelpTextComponentStyle>



      <HelpCountTextStyle
        style={props.helpCountStyle}>
        {typeof props.countLimit === 'number'
          ? props.helpTextValue?.length + ' / ' + props.countLimit
          : props.countLimit
        }
      </HelpCountTextStyle>

    </HelpContainerViewStyle>

  );
};



export default InputHelp;
