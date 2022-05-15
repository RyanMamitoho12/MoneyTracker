import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const s = StyleSheet.create({
    container: (type) => ({
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: (type === 'Primary') ? '#02CF8E' : '#8D92A3',
        borderRadius: 10,
    }),
    text: (type) => ({
        fontFamily: 'Poppins-Medium',
        color: (type === 'Primary') ? '#020202' : '#FFFFFF',
        fontSize: 15,
    }),
});

export default function Button({type='Primary', text="<Button_Text>", onPress=null}) {
    return(
        <TouchableOpacity style={s.container(type)} activeOpacity={0.5} onPress={onPress}>
            <Text style={s.text(type)}>{text}</Text>
        </TouchableOpacity>
    );
}
