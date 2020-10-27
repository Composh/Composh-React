import React from 'react';

import {
  Platform,
} from 'react-native';

import {
  Metrics,
} from '../../constants';

import {
  CenterContainer,
  HeaderContainer,
  HeaderTransparent,
  ToolbarContainer,
} from './styled';

import StatusViewBar from '../../base/StatusViewBar';



export interface Props {
  transparent?: boolean;

  noHeight?: boolean;
  statusBarStyle?: string;
  statusBarColor?: string;

  leftIcon?: object;
  rightIcon?: object;
  centerContent?: object;

  backgroundColor?: string;
  borderBottomColor?: string;

  noSubToolbarPadding?: boolean;

  style?: any;

  children?: object;
}



const Toolbar: React.FC<Props> = (props: any) => {
  const Component = props.transparent ? HeaderTransparent : HeaderContainer;


  return (

    <Component
      style={[
        props.style,
        {
          borderBottomColor: props.borderBottomColor || 'transparent',
          borderBottomWidth: 1,
        },
      ]}>

      <StatusViewBar
        noHeight={props.noHeight}
        barStyle={props.statusBarStyle}
        backgroundColor={props.transparent
          ? 'transparent'
          : (props.statusBarColor || 'transparent')
        }
      />


      {(props.leftIcon || props.centerContent || props.rightIcon) && (
        <ToolbarContainer style={[
          {
            height: Platform.select({ android: Metrics.TOOLBAR_ANDROID, ios: Metrics.TOOLBAR_IOS }),
            backgroundColor: props.backgroundColor,
          },
        ]}>

          {props.leftIcon && props.leftIcon}

          <CenterContainer>
            {props.centerContent}
          </CenterContainer>

          {props.rightIcon && props.rightIcon}

        </ToolbarContainer>
      )}


      {props.children && (
        <ToolbarContainer style={[
          {
            paddingLeft: props.noSubToolbarPadding ? 0 : 8,
            paddingRight: props.noSubToolbarPadding ? 0 : 8,
            minHeight: Platform.select({ android: Metrics.SUBTOOLBAR_ANDROID, ios: Metrics.SUBTOOLBAR_IOS }),
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
          },
        ]}>
          {props.children}
        </ToolbarContainer>
      )}

    </Component>

  );
};



export default Toolbar;
