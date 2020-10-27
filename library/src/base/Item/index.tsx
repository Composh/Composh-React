/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  Platform,
  Text,
  StyleSheet,
  View,
  // ViewPropTypes,
} from 'react-native';

// Lib Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';



const ListItem = (props) => {
  const {

    itemBorder,

    itemTypeIcon,

    itemTitle,
    itemColorTitle,

    itemSubtitle,
    itemColorSubtitle,

    itemThirtTitle,
    itemColorThirtTitle,

    itemItalicThirtTitle,
    itemOptions,

    style,

  } = props;

  return (

    <View
      style={[
        styles.settingsItemContainer,
        styles.listItemMargin,
        {
          borderBottomColor: itemBorder === true ? '#878787' : 'transparent',
          borderBottomWidth: 0.5,
          zIndex: Sizes.ZINDEX_SECURITY,
        },
        style,
      ]}>

      {itemTypeIcon != null && (
        <View style={styles.iconContent}>
          {itemTypeIcon}
        </View>
      )}


      <View style={styles.settingsInfoContainer}>

        {itemColorTitle !== null && itemColorTitle !== '' && (
          <Text style={[
            { color: itemColorTitle },
            styles.settingsTitle,
          ]}>
            {itemTitle}
          </Text>
        )}

        {itemSubtitle !== null && itemSubtitle !== '' && (
          <Text style={[
            { color: itemColorSubtitle },
            styles.settingsSubtitle,
          ]}>
            {itemSubtitle}
          </Text>
        )}

        {itemThirtTitle !== null && itemThirtTitle !== '' && (
          <Text style={[
            {
              color: itemColorThirtTitle,
              fontStyle: itemItalicThirtTitle ? 'italic' : 'normal',
            },
            styles.settingsThirtTitle,
          ]}>
            {itemThirtTitle}
          </Text>
        )}

      </View>


      {itemOptions !== null && (
        <View style={styles.settingsInfoOptions}>
          {itemOptions}
        </View>
      )}

    </View>

  );
};



ListItem.propTypes = {
  // ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};



const styles = StyleSheet.create({

  settingsItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 4,
    paddingHorizontal: 5,
    // paddingBottom: 4,
  },

  listItemMargin: {
    marginTop: 6,
    marginBottom: 6,
  },

  iconContent: {
    minHeight: 40,
    marginRight: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsInfoContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  settingsInfoOptions: {
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsTitle: {
    marginBottom: 2,
    fontSize: 15,
  },

  settingsSubtitle: {
    fontSize: 12,
  },

  settingsThirtTitle: {
    marginTop: 4,
    fontSize: 12,
  },

});



export default ListItem;
