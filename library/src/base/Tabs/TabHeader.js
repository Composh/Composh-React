/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Animated,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

// Lib Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';

import Toolbar from '../Toolbar';

const { height, width } = Dimensions.get('window');


const TabHeader = (props) => {
  const {
    data,
    type,
    backgroundColor,
  } = props;

  function renderItem(item) {

    let optionsView = (
      <View style={[
        styles.titleContainer,
        !true && { backgroundColor: Colors.SECONDARY },
        true && styles.containerShadow,
      ]}>
        <Animated.Text
          style={[
            styles.menuTitle,
            // { color: textColor },
            { color: 'yellow' },
          ]}
        // onPress={() => this.selectMenu(item.id)}
        >
          {item.title}
        </Animated.Text>
      </View>
    );



    let buttonsView = (
      <View style={{
        flex: 1,
        flexGrow: 1,
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Colors.WARNING,
      }}>
        <Text
          style={[
            styles.menuTitle,
            // { color: textColor },
            {
              color: 'yellow',
            },
          ]}
        // onPress={() => this.selectMenu(item.id)}
        >
          {/* {item.title} */}
          {item.title}
        </Text>
      </View>
    );

    switch (type) {
      case 'options':
        return optionsView;
      case 'buttons':
        if (Platform.OS === 'android') {
          return (
            <TouchableNativeFeedback
              // {...props}
              delayPressIn={0}>
              {buttonsView}
            </TouchableNativeFeedback>
          );
        } else {
          return (
            <TouchableOpacity
              // {...props}
              activeOpacity={0.6}>
              {buttonsView}
            </TouchableOpacity>
          );
        }
      default:
        return buttonsView;
    }
  }



  function renderContent() {

    let optionsContent = (
      <View style={styles.tabHeaderStyles}>
        <FlatList
          {...props}
          data={data}
          horizontal={true}
          // ref={this.menuRef}
          // extraData={this.state}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          // onScrollToIndexFailed={this.onScrollToIndexFailed}
          renderItem={({ item }) => renderItem(item)}
          contentContainerStyle={styles.optionsMenu}
        />
      </View>
    );

    let buttonsContent = (
      <View style={styles.tabHeaderStyles}>
        {data.map((item, index) => (
          renderItem(item)
        ))}
      </View>
    );

    switch (type) {
      case 'options':
        return optionsContent;
      case 'buttons':
        return buttonsContent;
      default:
        return buttonsContent;
    }
  }



  return (
    <Toolbar
      noPadding
      backgroundColor={backgroundColor}>
      {renderContent()}
    </Toolbar>
  );
};



const styles = StyleSheet.create({

  tabHeaderStyles: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'purple',
  },

  optionsMenu: {
    paddingHorizontal: Sizes.BASE * 2.5,
    paddingTop: 8,
    paddingBottom: 16,
  },

  tab: {
    backgroundColor: Colors.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },

  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: Colors.BLACK,
  },



  titleContainer: {
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 4,
    marginRight: 9,
  },

  containerShadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  menuTitle: {
    fontWeight: '600',
    fontSize: 14,
    // lineHeight: 28,
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: Colors.MUTED,
  },

});



export default TabHeader;
