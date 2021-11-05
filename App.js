import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './js/screens/Home';
import Recipe from './js/screens/Recipe';
import Cart from './js/screens/Cart';
import Orders from './js/screens/Orders';
import User from './js/screens/User';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {BackHandler, Image} from 'react-native';
import LoadingPage from './js/screens/LoadingPAge';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationEvents} from '@react-navigation/compat';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <>
      <NavigationEvents
        onWillFocus={() => {
          BackHandler.addEventListener('hardwareBackPress', () => {
            BackHandler.exitApp();
            return true;
          });
        }}
      />
      <Tab.Navigator
        initialRouteName={LoadingPage}
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#abd793',
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 10,
          },
          tabBarLabelStyle: {color: '#222616', fontWeight: 'bold'},
          tabBarActiveBackgroundColor: '#f6fbf2',
          tabBarItemStyle: {padding: 5, borderRadius: 15, margin: 10},
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = require('./js/images/icons/home.png');
                break;
              case 'Recipe':
                iconName = require('./js/images/icons/recipe.png');
                break;
              case 'Cart':
                iconName = require('./js/images/icons/cart.png');
                break;
              case 'Orders':
                iconName = require('./js/images/icons/orders.png');
                break;
              case 'User':
                iconName = require('./js/images/icons/user.png');
                break;

              default:
                break;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width: 25, height: 25}} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Recipe" component={Recipe} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loadingPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="loadingPage" component={LoadingPage} />
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
