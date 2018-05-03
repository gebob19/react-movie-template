import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/home';
import SeriesScreen from './screens/series';

export default StackNavigator(
  {
    Home: {
      screen : HomeScreen 
    },
    Series: {
      screen : SeriesScreen
    }
  }, 
  {
    initialRouteName: 'Home',
  }
);