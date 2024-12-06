import React from 'react';

import Overlay from '../Overlay';

import {
  AlertContent,
  AlertHeaderContent,
  ContainerModal,
} from './styled';



export interface IProps {
  visible?: boolean;
  // blurComponentIOS?: any; // PropTypes.node,
  // buttonSeparatorStyle?: any; // PropTypes.object,
  contentStyle?: any; // PropTypes.object,
  // footerStyle?: any; // PropTypes.object,
  headerStyle?: any; // PropTypes.object,
  // blurStyle?: any; // PropTypes.object,

  titleContainer: any; // PropTypes.node.isRequired,
  descriptionContainer: any; // PropTypes.node.isRequired,
  buttonContainer: any; // PropTypes.node.isRequired,

  overlayBackground?: any;
  overlayOnPress?: any;
};



const AlertContainer: React.FC<IProps> = (props) => {
  const {
    // blurComponentIOS,
    // buttonSeparatorStyle = {},
    titleContainer,
    descriptionContainer,
    buttonContainer,
    contentStyle = {},
    // footerStyle = {},
    headerStyle = {},
    // blurStyle = {},
    visible,
    overlayBackground,
    overlayOnPress,
    // ...otherProps
  } = props;



  return (

    <Overlay
      showBackground
      noPress={!overlayOnPress}
      visible={visible}
      onOverlayPress={overlayOnPress}
      overlayColor={overlayBackground || 'rgba(0, 0, 0, 0.5)'}>

      <ContainerModal>

        <AlertContent
          style={contentStyle}>

          {/* {Platform.OS === 'ios' && blurComponentIOS} */}

          {/* {Platform.OS === 'ios' && !blurComponentIOS && (
            <div style={[styles.blurModal, blurStyle]} />
          )} */}


          <AlertHeaderContent style={headerStyle}>
            {titleContainer}
            {descriptionContainer}
            {/* {contentChildrens} */}
          </AlertHeaderContent>


          {/* {otherChildrens.length > 0 && otherChildrens} */}

          {buttonContainer && buttonContainer}
        </AlertContent>

      </ContainerModal>

    </Overlay>

  );
};



export default AlertContainer;
