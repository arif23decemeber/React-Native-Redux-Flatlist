import {StackNavigator} from 'react-navigation';

import Home from '../component/Home';
import Detail from '../component/Detail';

export const Stack = StackNavigator({
  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  }
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});
