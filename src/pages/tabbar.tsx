import React, {memo} from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from './home';
import details from './details';

interface IProps {
  children?: React.ReactNode;
}

type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; otherParam: string};
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabBar: React.FC<IProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarLabel: '首页',
          headerTitle: '首页标题',
        }}
      />
      <Tab.Screen
        name="Details"
        component={details}
        options={{
          tabBarLabel: '详情',
          headerTitle: '详情标题',
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(TabBar);
