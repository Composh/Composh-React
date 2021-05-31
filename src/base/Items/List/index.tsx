import React from 'react';

import {
  IconContent,
  ItemContainer,
  InfoContainer,
  InfoOptions,
  ItemTitle,
  ItemSubtitle,
  ItemLastTitle,
} from './styled';



interface IProps {
  disabled?: boolean;
  activeOpacity?: number;
  onPress?: any;

  itemBorder?: boolean;

  itemTypeIcon?: object;

  itemTitle?: string;
  itemSizeTitle?: string;
  itemColorTitle?: string;

  itemSubtitle?: string;
  itemSizeSubtitle?: string;
  itemColorSubtitle?: string;

  itemThirtTitle?: string;
  itemSizeThirtTitle?: string;
  itemColorThirtTitle?: string;

  itemOptions?: object;
}



const ListItem: React.FC<IProps> = (props: any) => {
  return (

    <ItemContainer
      disabled={
        props.disabled
          ? props.disabled
          : props.onPress
            ? false
            : true
      }
      activeOpacity={props.activeOpacity}
      onPress={props.onPress}
      style={[
        {
          borderBottomColor: props.itemBorder ? '#878787' : 'transparent',
          borderBottomWidth: 0.5,
        },
      ]}>

      {props.itemTypeIcon && (
        <IconContent>
          {props.itemTypeIcon}
        </IconContent>
      )}


      <InfoContainer>

        {props.itemColorTitle && (
          <ItemTitle
            style={{
              color: props.itemColorTitle,
              fontSize: props.itemSizeTitle,
            }}>
            {props.itemTitle}
          </ItemTitle>
        )}

        {props.itemSubtitle && (
          <ItemSubtitle
            style={{
              color: props.itemColorSubtitle,
              fontSize: props.itemSizeSubtitle,
            }}>
            {props.itemSubtitle}
          </ItemSubtitle>
        )}

        {props.itemThirtTitle && (
          <ItemLastTitle
            style={{
              color: props.itemColorThirtTitle,
              fontSize: props.itemSizeThirtTitle,
              fontStyle: 'italic',
            }}>
            {props.itemThirtTitle}
          </ItemLastTitle>
        )}

      </InfoContainer>


      {props.itemOptions && (
        <InfoOptions>
          {props.itemOptions}
        </InfoOptions>
      )}

    </ItemContainer>

  );
};



export default ListItem;
