import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Body from './Body';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Main = () => {
    return (
        <View>
            <StatusBar style='light' />
            <ScrollView>
                <View style={style.Header}>
                    <Ionicons style={style.menu} name="menu" size={24} color="black" />
                    <Text style={style.txt}>Car</Text>
                    <Entypo style={style.users} name="user" size={24} color="black" />
                </View>
                <Body />
            </ScrollView>
            <View style={style.footer}>
                <Ionicons name="home-sharp" size={24} color="white" />
                <FontAwesome name="map" size={24} color="white" />
                <FontAwesome5 name="book" size={24} color="white" />
                <Ionicons name="notifications-outline" size={24} color="white" />
            </View>
            <View>

            </View>
        </View>
    )
}
export default Main;
const style = StyleSheet.create({
    Header: {
        paddingVertical: 35,
        paddingHorizontal: 40,
        backgroundColor: '#656CED',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '60%',
        borderRadius: 30

    },
    footer: {
        backgroundColor: '#292A35',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        height: 70,
        paddingTop: 20,
    },
    menu: {
        paddingTop: 9,
        paddingLeft: 5,
        paddingRight: 1,
        borderRadius: 10,
        height: 45,
        width: '28%',
        fontSize: 30,
        backgroundColor: '#ffff',
        color: '#6269E6',
        right: 250

    },
    txt: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        top: 50,
        left: 225

    },
    users: {
        paddingTop: 9,
        paddingLeft: 5,
        paddingRight: 1,
        borderRadius: 10,
        height: 45,
        width: '28%',
        fontSize: 30,
        backgroundColor: '#ffff',
        color: '#6269E6',
        left: 15

    }
})