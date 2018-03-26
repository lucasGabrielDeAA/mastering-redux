import { StackNavigator } from 'react-navigation';

import Main from 'pages/main';
import Favorites from 'pages/favorites';

const Routes = StackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
});

export default Routes;
