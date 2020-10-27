// React Components Import
import React from 'react';

import {
  Text,
  View,
} from 'react-native';

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


      <View>


        <View>

          <Text>
            Basic
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Text>
              Default
            </Text>

            <Text>
              Icon
            </Text>

            <Text>
              Avatar
            </Text>

          </View>

        </View>






        <View>

          <Text>
            Colors
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Text>
              Red
            </Text>

            <Text>
              Green
            </Text>

            <Text>
              Darkblue
            </Text>

          </View>

        </View>






        <View>

          <Text>
            Outline
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Text>
              Red
            </Text>

            <Text>
              Green
            </Text>

            <Text>
              Darkblue
            </Text>

          </View>

        </View>






        <View>

          <Text>
            Icons
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Text>
              Home
            </Text>

            <Text>
              Camera
            </Text>

            <Text>
              User
            </Text>

          </View>

        </View>






        <View>

          <Text>
            Avatar
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Text>
              Andy
            </Text>

            <Text>
              Martin
            </Text>

            <Text>
              Carla
            </Text>

          </View>

        </View>




      </View>



    </Container>

  );
};



export default ChipScreen;
