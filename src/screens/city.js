import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'

const City = ({ weatherData }) => {

    const { name, country, population, sunrise, sunset } = weatherData

    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground source={require('../../assets/city_background_image.jpg')} style={styles.image_background}>
                <Text style={styles.container1}>{name}</Text>
                <Text style={styles.container2}>{country}</Text>
                <Feather name={'user'} size={60} color={'#FE0000'} style={styles.container3} />
                <Text style={styles.container4}>Population: {population}</Text>
                <View style={styles.container5}>
                    <Feather name={'sunrise'} size={50} color={'#FE0000'} marginLeft={45} />
                    <Feather name={'sunset'} size={50} color={'#FE0000'} marginRight={45}/>
                </View>
                <View style={styles.container6}>
                    <Text style={{ color: '#FE0000', fontWeight: 'bold', fontSize: 17 , marginLeft: 20 }}>Sunrise Time:</Text>
                    <Text style={{ color: '#FE0000', fontWeight: 'bold', fontSize: 17 , marginRight: 20 }}>Sunset Time:</Text>
                </View>
                <View style={styles.container6}>
                    <Text style={{ color: '#FE0000', fontWeight: 'bold', fontSize: 17 , marginLeft: 28 }}>{moment(sunrise*1000).format('h:mm:ss a')}</Text>
                    <Text style={{ color: '#FE0000', fontWeight: 'bold', fontSize: 17 , marginRight: 28 }}>{moment(sunset*1000).format('h:mm:ss a')}</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    image_background: {
        flex: 1
    },

    container1: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FE0000'
    },

    container2: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FE0000',
    },

    container3: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 15
    },

    container4: {
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FE0000'
    },

    container5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },

    container6: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default City