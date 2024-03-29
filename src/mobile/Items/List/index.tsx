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



export interface IProps {
  disabled?: boolean;
  activeOpacity?: number;
  onPress?: any;

  border?: boolean;

  iconLeft?: any;
  iconRight?: any;

  title?: string | null;
  titleSize?: string;
  titleColor?: string;

  subtitle?: string | null;
  subtitleSize?: string;
  subtitleColor?: string;

  thirdtitle?: string | null;
  thirdtitleSize?: string;
  thirdtitleColor?: string;
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
      borderBottomColor={props.border ? '#878787' : 'transparent'}
      borderBottomWidth={0.5}
      onPress={(!props.disabled || !props.onPress) && props.onPress}>

      {props.iconLeft && (
        <IconContent>
          {props.iconLeft}
        </IconContent>
      )}


      <InfoContainer>

        {props.title && (
          <ItemTitle
            style={{
              color: props.titleColor,
              fontSize: props.titleSize,
            }}>
            {props.title}
          </ItemTitle>
        )}

        {props.subtitle && (
          <ItemSubtitle
            style={{
              color: props.subtitleColor,
              fontSize: props.subtitleSize,
            }}>
            {props.subtitle}
          </ItemSubtitle>
        )}

        {props.thirdtitle && (
          <ItemLastTitle
            style={{
              color: props.thirdtitleColor,
              fontSize: props.thirdtitleSize,
              fontStyle: 'italic',
            }}>
            {props.thirdtitle}
          </ItemLastTitle>
        )}

      </InfoContainer>


      {props.iconRight && (
        <InfoOptions>
          {props.iconRight}
        </InfoOptions>
      )}

    </ItemContainer>

  );
};



export default ListItem;
