import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Header, TextInput, Gap, Button } from '../components';

const s = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FAFAFC',
    },
    content: {
        marginTop: 25,
        paddingTop: 25,
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    }
});

export default function SignIn({navigation}) {
    const signInPress = () => {
        navigation.replace('HomeRouter');
    }

    const createNewAccountPress = () => {
        navigation.push('SignUp');
    }

    return(
        <View style={s.screen}>
            <Header title="Sign In" />
            <View style={s.content}>
                <TextInput title="Email Address" placeholder="Type your email address" />
                <Gap h={15} />
                <TextInput title="Password" placeholder="Type your password" secure={true} />
                <Gap h={25} />
                <Button text="Sign In" onPress={signInPress} />
                <Gap h={10} />
                <Button type="secondary" text="Create New Account" onPress={createNewAccountPress} />
            </View>
        </View>
    );
}
