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



interface Props {
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



const ListItem: React.FC<Props> = (props: any) => {
  return (

    <ItemContainer
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
