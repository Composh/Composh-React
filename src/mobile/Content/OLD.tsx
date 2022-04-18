import React from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Sizes,
  Metrics,
} from '../../constants';



export interface IProps {
  scroll?: boolean;
  showsVerticalScrollIndicator?: boolean;

  padding?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  backgroundColor?: string;

  style?: any;
  contentStyle?: any;

  children?: any; // PropTypes.node,
}



const Content = (props: IProps) => {
  // const Content: React.FC<IProps> = (props) => {
  // const padd = props.paddinKCg !==0 !! props.padding !== null

  const paddingStyle = {
    paddingTop: props.padding ? props.padding : (props.paddingTop || 0),
    paddingLeft: props.padding ? props.padding : (props.paddingLeft || 0),
    paddingRight: props.padding ? props.padding : (props.paddingRight || 0),
    paddingBottom: (props.padding ? props.padding : (props.paddingBottom || 0)) + Metrics.BottomContentPadding,
  }



  if (props.scroll) {
    return (

      <ScrollView
        // {...props}
        showsVerticalScrollIndicator={props.showsVerticalScrollIndicator}
        contentContainerStyle={[
          paddingStyle,
          props.contentStyle,
          styles.contentGrowFlex,
        ]}
        style={[
          {
            backgroundColor: props.backgroundColor,
          },
          props.style,
          styles.contentFlex,
        ]}>

        {props.children}

      </ScrollView>

    );
  }
  else {
    return (

      <View style={[
        {
          backgroundColor: props.backgroundColor,
        },
        paddingStyle,
        props.style,
        styles.contentFlex,
      ]}>

        {props.children}

      </View>

    );
  }

};



const styles = StyleSheet.create({

  contentFlex: {
    flex: 1,
  },

  contentGrowFlex: {
    flexGrow: 1,
  },

});



Content.defaultProps = {
  scroll: true,
  showsVerticalScrollIndicator: true,

  backgroundColor: 'transparent',
}



export default Content;
