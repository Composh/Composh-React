import React from 'react';

import {
  StatusBar,
} from 'react-native';

import ChipScreen from './screens/Chip';
import WemoScreen from './screens/Wemo';



const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <ChipScreen /> */}
      <WemoScreen />
    </>
  );
};



export default App;
