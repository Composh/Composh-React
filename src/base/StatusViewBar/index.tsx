// React Components Import
import React from 'react';

import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// Application Configs Import
import {
  Colors,
  Metrics,
} from '../../constants';



interface IProps {
  hidden?: boolean;
  noHeight?: boolean;
  barStyle?: any;
  backgroundColor?: string;
}



const StatusViewBar: React.FC<IProps> = (props) => {
  return (

    <View style={[
      styles.statusBarStyles,
      {
        height: props.noHeight
          ? 0
          : Metrics.StatusBar,
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
