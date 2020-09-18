/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import NotificationScreen from './src/components/NotificationScreen'
import HomeScreen from './src/screens/HomeScreen'
AppRegistry.registerComponent(appName, () => HomeScreen);
