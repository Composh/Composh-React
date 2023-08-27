import React from 'react';

import {
  SnackbarMui,
} from './styled';



export interface IProps {
  accentColor?: string;
  messageColor?: string;
  backgroundColor?: string | null;
  distanceCallback?: any; // PropTypes.func,
  actionHandler?: any; // PropTypes.func,
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  visible?: boolean;
  actionText?: string;
  textMessage?: any; // PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  position?: any; // PropTypes.oneOf(['bottom', 'top']), // bottom (default), top
  autoHidingTime?: number; // How long (in milliseconds) the snack bar will be hidden.
  containerStyle?: any; // ViewPropTypes.style,
  messageStyle?: any; // Text.propTypes.style,
  actionStyle?: any; // Text.propTypes.style,


  action?: any;
  onClose?: any;
};



const SnackBar: React.FC<IProps> = (props: IProps) => {
  return (

    <SnackbarMui
      open={props.visible}
      autoHideDuration={1800}
      onClose={props.onClose}
      message={props.textMessage}
      action={props.action}
      backgroundColor={props.backgroundColor || '#666666'}

      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    />

  );
};



export default SnackBar;
