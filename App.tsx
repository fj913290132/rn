/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
//import Home from './src/pages/home';
//import Details from './src/pages/details';
import Tabbar from './src/pages/tabbar';
import about from './src/pages/about';
import store from './src/store';
export type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; otherParam: string};
  About: undefined;
  TabBar: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide(); // 隐藏启动画面
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabBar"
            component={Tabbar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="About"
            component={about}
            options={{
              title: 'About Screen',
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
