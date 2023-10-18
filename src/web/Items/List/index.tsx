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

  title?: string | any | null;
  titleSize?: string;
  titleColor?: string;

  subtitle?: string | any | null;
  subtitleSize?: string;
  subtitleColor?: string;

  thirdtitle?: string | any | null;
  thirdtitleSize?: string;
  thirdtitleColor?: string;
}



const ListItem: React.FC<IProps> = (props: any) => {
  const className: any = { ...props };



  return (

    <ItemContainer
      className={className?.className}
      disabled={props.disabled}
      borderBottomColor={props.border ? '#878787' : 'transparent'}
      borderBottomWidth={0.5}
      onClick={(!props.disabled || !props.onPress) ? props.onPress : null}>

      {props.iconLeft && (
        <IconContent>
          {props.iconLeft}
        </IconContent>
      )}



      <InfoContainer>

        {props.title && typeof props.title !== 'string' && (
          props.title
        )}

        {props.title && typeof props.title === 'string' && (
          <ItemTitle
            color={props.titleColor}
            fontSize={props.titleSize}>
            {props.title}
          </ItemTitle>
        )}



        {props.subtitle && typeof props.subtitle !== 'string' && (
          props.subtitle
        )}

        {props.subtitle && typeof props.subtitle === 'string' && (
          <ItemSubtitle
            color={props.subtitleColor}
            fontSize={props.subtitleSize}>
            {props.subtitle}
          </ItemSubtitle>
        )}



        {props.thirdtitle && typeof props.thirdtitle !== 'string' && (
          props.thirdtitle
        )}

        {props.thirdtitle && typeof props.thirdtitle === 'string' && (
          <ItemLastTitle
            color={props.thirdtitleColor}
            fontSize={props.thirdtitleSize}>
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
