import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Home,
    HomeIdk
} from '../pages';

import { Home as HomeIcon, Idk } from '../assets/icons';

const Tab = createBottomTabNavigator();

export default function HomeRouter() {
    return(
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false, tabBarLabel: () => false}}>
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{tabBarIcon: () => <HomeIcon />}}
            />
            <Tab.Screen 
                name='HomeIdk'
                component={HomeIdk}
                options={{tabBarIcon: () => <Idk />}}
            />
        </Tab.Navigator>
    );
}
