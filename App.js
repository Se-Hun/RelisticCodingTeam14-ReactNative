import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CityList from './CityList';
import APICaller from './APICaller';
import WeatherDetailScreen from './WeatherDetailScreen';

const AppNavigator = createStackNavigator(
  {
    CityList: CityList,
    Select: APICaller,
    Detail: WeatherDetailScreen,
  },
  {
    initialRouteName: 'CityList',
  }
);

export default createAppContainer(AppNavigator);
