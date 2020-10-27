// React Components Import
import React from 'react';

import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// Application Configs Import
import {
  Colors,
  Metrics,
} from '../../constants';

import {
  isIphoneX,
} from '../../utils/PlatformsConfig';



export interface Props {
  hidden?: boolean;
  noHeight?: boolean;
  barStyle?: any;
  backgroundColor?: string;
}



const StatusViewBar: React.FC<Props> = (props: any) => {
  return (

    <View style={[
      styles.statusBarStyles,
      {
        height: props.noHeight
          ? 0
          : Platform.select({
            android: StatusBar.currentHeight,
            ios: isIphoneX() ? Metrics.STATUSBAR_IOS_IPHONE_X : Metrics.STATUSBAR_IOS,
          }),
        backgroundColor: props.backgroundColor || 'gray',
      },
    ]}>

      <StatusBar
        translucent
        hidden={props.hidden}
        barStyle={
          props.barStyle
            ? props.barStyle
            : 'light-content'
        }
        backgroundColor={Colors.TRANSPARENT}
      />

    </View>

  );
};



const styles = StyleSheet.create({

  statusBarStyles: {
    width: '100%',
  },

});



export default StatusViewBar;
