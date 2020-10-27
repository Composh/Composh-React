// React Components Import
import React from 'react';

// Styled Component Common Import
import {
  Container,
  Title,
  Toolbar
} from '../../../../src/base';



const ToolbarScreen: React.FC = () => {
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
            Toolbar
            </Title>
        }
      />




    </Container>

  );
};



export default ToolbarScreen;
