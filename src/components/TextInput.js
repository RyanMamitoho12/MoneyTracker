import React from 'react';
import { StyleSheet, View, Text, TextInput as RN_TextInput } from 'react-native';

const s = StyleSheet.create({
    container: {
        
    },
    title: {
        marginBottom: 5,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        fontSize: 15,
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 7.5,
        borderColor: '#020202',

        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        fontSize: 15,
    },
});

export default function TextInput({title="<Header_Title>", placeholder="<Header_Placeholder>", secure=false, onChange=null}) {
    return(
        <View style={s.container}>
            <Text style={s.title}>{title}</Text>
            <RN_TextInput style={s.textInput} placeholder={placeholder} secureTextEntry={secure} onChangeText={onChange} />
        </View>
    );
}
