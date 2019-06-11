import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CityList from './CityList';
import SelectInfo from './SelectInfo';
import WeatherDetailScreen from './WeatherDetailScreen';

const AppNavigator = createStackNavigator(
  {
    CityList: CityList,
    Select: SelectInfo,
    Detail: WeatherDetailScreen,
  },
  {
    initialRouteName: 'CityList',
  }
);

export default createAppContainer(AppNavigator);
