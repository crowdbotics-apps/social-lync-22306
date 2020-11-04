import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn41167627Navigator from '../features/SignIn41167627/navigator';
import NotificationList2167626Navigator from '../features/NotificationList2167626/navigator';
import Camera3167625Navigator from '../features/Camera3167625/navigator';
import BlankScreen0167624Navigator from '../features/BlankScreen0167624/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn41167627: { screen: SignIn41167627Navigator },
NotificationList2167626: { screen: NotificationList2167626Navigator },
Camera3167625: { screen: Camera3167625Navigator },
BlankScreen0167624: { screen: BlankScreen0167624Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
