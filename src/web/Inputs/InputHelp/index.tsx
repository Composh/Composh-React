import React from 'react';

import {
  HelpContainerViewStyle,
  HelpTextView,
  HelpTextComponentStyle,
  HelpCountTextStyle,
} from './styled';



export interface IProps {
  style?: any;

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
      className={className?.className}
      style={props.style}>

      <HelpTextView>

        <HelpTextComponentStyle
          style={props.helpTextStyle}>
          {!props.noHelp && props.helpText}
        </HelpTextComponentStyle>

      </HelpTextView>



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
