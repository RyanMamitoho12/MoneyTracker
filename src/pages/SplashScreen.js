import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { MoneyTracker as Icon } from '../assets/icons';

const s = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#02CF8E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Poppins-Medium',
        color: '#020202',
        fontSize: 30,
    },
});

export default function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => navigation.replace('SignIn'), 250);
    }, []);

    return(
        <View style={s.screen}>
            <Icon />
            <Text style={s.text}>MoneyTracker</Text>
        </View>
    );
}
