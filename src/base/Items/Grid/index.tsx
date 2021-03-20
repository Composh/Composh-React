// React Components Import
import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';



export interface IProps {
  disabled?: boolean;
  activeOpacity?: number;
  onPress?: any;

  icon?: any;

  iconGridColor?: string;
  iconGridLabel?: string;
}



const GridIcon: React.FC<IProps> = (props) => {
  return (

    <TouchableOpacity
      disabled={
        props.disabled
          ? props.disabled
          : props.onPress
            ? false
            : true
      }
      activeOpacity={props.activeOpacity}
      onPress={props.onPress}
      style={styles.gridIconContent}>

      {props.icon}

      <Text
        style={[
          styles.availableText,
          styles.gridIconMargin,
          { color: props.iconGridColor },
        ]}
        numberOfLines={2}
        ellipsizeMode="tail">
        {props.iconGridLabel}
      </Text>

    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  gridIconContent: {
    alignItems: 'center',
  },

  availableText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },

  gridIconMargin: {
    marginVertical: 8,
  },
});

export default GridIcon;
