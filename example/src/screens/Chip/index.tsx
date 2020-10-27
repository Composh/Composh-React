// React Components Import
import React from 'react';
import { View } from 'react-native';

// Styled Component Common Import
import {
  Container,
  Title,
  Toolbar
} from 'react-composh';

// import Container from '../../../../src/base/Container';

// import ButtonNative from 'composh/base/Button/ButtonWative';




const ChipScreen: React.FC = () => {
  return (

    <Container>

      <Toolbar
        statusBarStyle="light-content"
        statusBarColor={'darkblue'}
        backgroundColor={'darkblue'}
        // leftIcon={
        //   <ButtonBack />
        // }
        centerContent={
          <Title
            numberOfLines={1}
            ellipsizeMode="tail">
            Chip
          </Title>
        }
      />



    </Container>

  );
};



export default ChipScreen;
