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
  titleSize?: string; // FIXME: SET DEFAULT AND PASS TO STYLED.TS
  titleColor?: string;

  subtitle?: any | null; // string
  subtitleSize?: string; // FIXME: SET DEFAULT AND PASS TO STYLED.TS
  subtitleColor?: string;

  thirdtitle?: string | null;
  thirdtitleSize?: string; // FIXME: SET DEFAULT AND PASS TO STYLED.TS
  thirdtitleColor?: string;
}



const ListItem: React.FC<IProps> = (props: any) => {
  const className: any = { ...props };



  return (

    <ItemContainer
      className={className?.className}

      // disabled={
      //   props.disabled
      //     ? props.disabled
      //     : props.onPress
      //       ? false
      //       : true
      // }
      borderBottomColor={props.border ? '#878787' : 'transparent'}
      borderBottomWidth={0.5}
      onClick={(!props.disabled || !props.onPress) && props.onPress}>

      {props.iconLeft && (
        <IconContent>
          {props.iconLeft}
        </IconContent>
      )}


      <InfoContainer>

        {props.title && typeof props.title !== 'string'
          ? props.title
          : (
            <ItemTitle
              style={{
                color: props.titleColor,
                fontSize: props.titleSize,
              }}>
              {props.title}
            </ItemTitle>
          )
        }


        {props.subtitle && typeof props.subtitle !== 'string'
          ? props.subtitle
          : (
            <ItemSubtitle
              style={{
                color: props.subtitleColor,
                fontSize: props.subtitleSize,
              }}>
              {props.subtitle}
            </ItemSubtitle>
          )
        }


        {props.thirdtitle && typeof props.thirdtitle !== 'string'
          ? props.thirdtitle
          : (
            <ItemLastTitle
              style={{
                color: props.thirdtitleColor,
                fontSize: props.thirdtitleSize,
                fontStyle: 'italic',
              }}>
              {props.thirdtitle}
            </ItemLastTitle>
          )
        }

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
