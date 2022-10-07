import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View,Text, StyleSheet} from 'react-native'
import Body from './Body';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Main =() => {
    return(
        <View>
             <StatusBar style='light' />
            <View  style={style.Header}>
            <Ionicons style={style.menu} name="menu" size={24} color="black" />
            <Text style={style.txt}>Car</Text>
            <Entypo style={style.users} name="user" size={24} color="black" />
            </View>
            <Body/>
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
const style= StyleSheet.create ({
    Header: {
        paddingVertical: 60,
        paddingHorizontal: 40,
        backgroundColor: '#656CED',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '60%',

    },
    footer: {
        backgroundColor: '#292A35',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        height: 70,
        paddingTop: 20
    },
    menu: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold',
        top: 30,
        left: 25

    },
    txt: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        top: 40,
        left: 225

    },
    users: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold',
        top: 30,
        right: 25

    }
})