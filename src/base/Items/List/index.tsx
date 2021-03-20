import React from 'react';

// Styled Component Common Import
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
  itemColorTitle?: string;

  itemSubtitle?: string;
  itemColorSubtitle?: string;

  itemThirtTitle?: string;
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

        {props.itemColorTitle !== null && props.itemColorTitle !== '' && (
          <ItemTitle
            style={{
              color: props.itemColorTitle,
            }}>
            {props.itemTitle}
          </ItemTitle>
        )}

        {props.itemSubtitle !== null && props.itemSubtitle !== '' && (
          <ItemSubtitle
            style={{
              color: props.itemColorSubtitle,
            }}>
            {props.itemSubtitle}
          </ItemSubtitle>
        )}

        {props.itemThirtTitle !== null && props.itemThirtTitle !== '' && (
          <ItemLastTitle
            style={{
              color: props.itemColorThirtTitle,
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
