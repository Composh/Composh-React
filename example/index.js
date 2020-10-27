// React Components Import
import {
  AppRegistry,
} from 'react-native';

import App from './src/App';

// Application Configs Import
import {
  name as appName,
} from './app.json';

AppRegistry.registerComponent(appName, () => App);
