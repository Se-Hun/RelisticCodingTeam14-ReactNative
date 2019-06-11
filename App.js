import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CityList from './CityList';
import APICaller from './APICaller';

const AppNavigator = createStackNavigator(
  {
    CityList: CityList,
    Select: APICaller,
  },
  {
    initialRouteName: 'CityList',
  }
);

export default createAppContainer(AppNavigator);
