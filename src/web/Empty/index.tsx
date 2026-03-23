import React from 'react';

// import ButtonApp from '../buttons/button-app';

import {
  EmptyContentView,
  EmptyImage,
  EmptyTitle,
  EmptyDescription,
  EmptyButtonView,
} from './styled';



export interface IProps {
  image?: any;

  title?: string;
  titleSize?: number;

  description?: string;
  descriptionSize?: number;

  buttonText?: any;
  onPress?: any;
}



const EmptyContent: React.FC<IProps> = (props: IProps) => {
  return (

    <EmptyContentView>

      {props.image && (
        <EmptyImage
          alt={'Empty Image'}
          src={props.image}
        />
      )}


      {props.title && (
        <EmptyTitle
          style={{
            fontSize: props.titleSize || 14,
          }}>
          {props.title}
        </EmptyTitle>
      )}


      {props.description && (
        <EmptyDescription
          style={{
            fontSize: props.descriptionSize || 13.5,
          }}>
          {props.description}
        </EmptyDescription>
      )}


      {props.buttonText && (
        <EmptyButtonView>
          {/* <ButtonApp
            // activeOpacity={Sizes.CardActiveOpacity}
            title={props.buttonText}
            onPress={props.onPress}
          /> */}
        </EmptyButtonView>
      )}

    </EmptyContentView>

  );
};



export default EmptyContent;
