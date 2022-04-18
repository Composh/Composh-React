import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';



export interface IProps {
  group?: string;
  children?: object;
}



const ToolbarGroup: React.FC<IProps> = (props: IProps) => {
  function alignByGroup() {
    if (props.group === 'left') {
      return styles.leftAlign;
    }
    else if (props.group === 'right') {
      return styles.rightAlign;
    }
    else {
      return null;
    }
  }



  return (
    <View
      style={[
        styles.container,
        alignByGroup(),
      ]}>
      {props.children}
    </View>
  );
};



const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  leftAlign: {
    justifyContent: 'flex-start',
  },

  rightAlign: {
    justifyContent: 'flex-end',
  },

});



export default ToolbarGroup;
