import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { Back } from '../assets/icons';

const s = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        marginLeft: 25,
    },
    titleWrap: {
        marginLeft: 25,
    },
    title: {
        fontFamily: 'Poppins-Medium',
        color: '#020202',
        fontSize: 20,
    },
    subTitle: {
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        fontSize: 15,
    },
    profile: {
        height: 50,
        width: 50,
        marginRight: 25,
        borderRadius: 10,
    },
});

export default function Header({back=false, onPress=null, title="<Title>", subTitle=null, profile=null}) {
    return(
        <View style={s.container}>
            <View style={s.leftWrap}>
                {(back) && <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    <Back style={s.back} />
                </TouchableOpacity> }
                <View style={s.titleWrap}>
                    <Text style={s.title}>{title}</Text>
                    {(subTitle) && <Text style={s.subTitle}>{subTitle}</Text>}
                </View>
            </View>
            <Image source={profile} style={s.profile} />
        </View>
    );
}
