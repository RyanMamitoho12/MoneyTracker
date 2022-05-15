import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

import { Home as IconHome, Idk } from '../assets/icons';
import { Person } from '../assets/images';
import { Header, Gap, Button } from '../components';

const s = StyleSheet.create({
    screen: {
        flex: 1,
    },
    contentWrap: {
        flex: 1,
        marginVertical: 25,
    },
    content: {
        paddingTop: 15,
        paddingBottom: 50,
        paddingHorizontal: 25,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        fontSize: 15,
    },
    money: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        fontSize: 25,
    },
    textWrap: {
        flexDirection: 'row',
    },
    textRight: {
        marginLeft: 20,
    },
    text: (money) => ({
        fontFamily: (money) ? 'Poppins-Medium' : 'Poppins-Regular',
        color: '#000000',
        fontSize: 15,
    }),
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    tab: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
    }
});

export default function Home({navigation}) {
    return(
        <View style={s.screen}>
            <Header title="Money Tracker" subTitle="Track your money" profile={Person} />
            <ScrollView style={s.contentWrap}>
                <View style={s.content}>
                    <Text style={s.title}>Your Balance</Text>
                    <Gap h={5} />
                    <Text style={s.money}>Rp. 10.000.000</Text>
                    <Gap h={20} />
                    <View style={s.horizontalLine} />
                    <Gap h={20} />
                    <View style={s.textWrap}>
                        <View>
                            <Text style={s.text(false)}>Cash on Hand</Text>
                            <Text style={s.text(false)}>Cash on Bank</Text>
                        </View>
                        <View style={s.textRight}>
                            <Text style={s.text(true)}>Rp 4.000.000</Text>
                            <Text style={s.text(true)}>Rp 6.000.000</Text>
                        </View>
                    </View>
                </View>
                <Gap h={20} />
                <View style={s.content}>
                    <Text style={s.title}>Add Transaction</Text>
                    <Gap h={10} />
                    <Button text="Cash On Hand" onPress={() => navigation.push('CashOnHand')} />
                    <Gap h={20} />
                    <Button text="Cash On Bank" onPress={() => navigation.push('CashOnBank')} />
                </View>
            </ScrollView>
            {/* <View style={s.tab}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
                    <IconHome />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
                    <Idk />
                </TouchableOpacity>
            </View> */}
        </View>
    );
}
