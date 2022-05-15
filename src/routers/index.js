import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SplashScreen,
    SignIn,
    SignUp,
    CashOnHand,
    CashOnBank
} from '../pages';

import HomeRouter from './HomeRouter';

const Stack = createNativeStackNavigator();

export default function Router() {
    return(
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name='SplashScreen'
                component={SplashScreen}
            />
            <Stack.Screen 
                name='SignIn'
                component={SignIn}
            />
            <Stack.Screen 
                name='SignUp'
                component={SignUp}
            />
            <Stack.Screen 
                name='HomeRouter'
                component={HomeRouter}
            />
            <Stack.Screen 
                name='CashOnHand'
                component={CashOnHand}
            />
            <Stack.Screen 
                name='CashOnBank'
                component={CashOnBank}
            />
        </Stack.Navigator>
    );
}
