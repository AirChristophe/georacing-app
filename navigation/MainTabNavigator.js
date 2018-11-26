import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import MediaScreen from '../screens/MediaScreen';
import EventScreen from '../screens/EventScreen';
import SettingScreen from '../screens/SettingScreen';

export default createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    News: {
        screen: NewsScreen,
    },
    Media: {
        screen: MediaScreen,
    },
    Event: {
        screen: EventScreen,
    },
    Setting: {
        screen: SettingScreen,
    },
});
