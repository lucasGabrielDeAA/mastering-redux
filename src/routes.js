import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'pages/main';
import Favorites from 'pages/favorites';

const Routes = StackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primaryDark,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});

export default Routes;
