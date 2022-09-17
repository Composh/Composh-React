import React from 'react';

import { Snackbar } from '@material-ui/core';

// import { Container } from './styles';



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



const SnackBar: React.FC<IProps> = (props: any) => {
  return (

    <Snackbar
      open={props.visible}
      autoHideDuration={1800}
      onClose={props.onClose}
      message={props.textMessage}
      action={props.action}
    />

  );
};



export default SnackBar;
