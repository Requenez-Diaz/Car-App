import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Body = () => {
    return (
        <View>
            <ScrollView>
            <View style={style.btn2}>
                <Text style={style.txtx}> My Car </Text>
                <TouchableOpacity style={style.btn}>
                    <Text style={style.txt}> +Add new Car </Text>
                </TouchableOpacity>
            </View>
            <View style={style.container}>
                <FontAwesome style={style.auto} name="automobile" size={24} color="black" />
                <Text style={style.textAuto}>Mercedes Benz</Text>
                <Text style={style.code}>A 610226</Text>
                <Image style={style.stylesImg} source={require('./src/Imgs/Mercedes.png')} />
            </View>
            <View style={style.container}>
                <MaterialCommunityIcons style={style.auto} name="truck-minus" size={24} color="black" />
                <Text style={style.textAuto}>Ford F 350</Text>
                <Text style={style.code}>A 610226</Text>
                <Image style={style.stylesImg} source={require('./src/Imgs/Ford.jpg')} />

            </View>
            <View style={style.container}>
                <MaterialCommunityIcons style={style.auto} name="car-side" size={24} color="black" />
                <Text style={style.textAuto}>Tesla Model 3</Text>
                <Text style={style.code}>B 10033</Text>
                <Image style={style.stylesImg} source={require('./src/Imgs/Tesla.webp')} />
            </View>
            <View style={style.container}>
                <MaterialCommunityIcons style={style.auto} name="car-side" size={24} color="black" />
                <Text style={style.textAuto}>Nissan</Text>
                <Text style={style.code}>A 65840</Text>
                <Image style={style.stylesImg} source={require('./src/Imgs/Nissan.png')} />
            </View>
            <View style={style.container}>
                <MaterialCommunityIcons style={style.auto} name="car-side" size={24} color="black" />
                <Text style={style.textAuto}>Bugatti E 105</Text>
                <Text style={style.code}>A 610226</Text>
                <Image style={style.stylesImg} source={require('./src/Imgs/Bugatti.jpg')} />
            </View>
            <View style={style.container}>
                <MaterialCommunityIcons style={style.auto} name="car-side" size={24} color="black" />
                <Text style={style.textAuto}>Ford F 350</Text>
                <Text style={style.code}>A 610226</Text>
                <Image style={style.stylesImg} source={require('./src/Imgs/Mercedes.png')} />
            </View>
            <View style={style.container}>
                <MaterialCommunityIcons style={style.auto} name="car-side" size={24} color="black" />
                <Text style={style.textAuto}>Ford F 350</Text>
                <Text style={style.code}>A 610226</Text>
                <Image style={style.stylesImg} source={require('./src/Imgs/Mercedes.png')} />
            </View>
            <View style={style.container}>
                <MaterialCommunityIcons style={style.auto} name="car-side" size={24} color="black" />
                <Text style={style.textAuto}>Ford F 350</Text>
                <Text style={style.code}>A 610226</Text>
                <Image style={style.stylesImg} source={require('./src/Imgs/Mercedes.png')} />
            </View>
            </ScrollView>
        </View>
    )
}
export default Body;

const style = StyleSheet.create({
    btn: {
        marginTop: 10,
        height: 42,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    btn2: {
        left: 320
    },
    txt: {
        color: '#656CED',
        fontWeight: 'bold',
        fontSize: 20
    },
    txtx: {
        position: 'absolute',
        top: 10,
        fontWeight: 'bold',
        fontSize: 30,
        right: 650,
        zIndex: 2
    },
    container: {
        width: '90%',
        height: 100,
        backgroundColor: '#FFF',
        marginLeft: 25,
        borderRadius: 10,
        border: 2
    },
    stylesImg: {
        position: 'absolute',
        height: 50,
        width: 75,
        borderRadius: 10,
        left: 350,
        marginTop: 15
    },
    auto: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 1,
        borderRadius: 10,
        height: 45,
        width: '10%',
        fontSize: 30,
        backgroundColor: '#6269E6',
        color: 'white'
    },
    textAuto: {
        position: 'absolute',
        fontSize: 22,
        color: 'gray',
        textAlign: 'center',
        left: 50
    },
    code: {
        fontSize: 16,
        color: 'gray',
        marginTop: 3
    }
})
