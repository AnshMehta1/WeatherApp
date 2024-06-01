import React from 'react'
import { View, SafeAreaView, StyleSheet, StatusBar, FlatList, ImageBackground } from 'react-native'
import Flatlist_Item from '../components/flatlist_item'

const Upcoming_Weather = ({ weatherData }) => {

    const renderItem = ({ item }) => {
        const currentTime = new Date().getTime() 
        const itemTime = new Date(item.dt_txt).getTime()
        const endTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000

        if (itemTime > currentTime && itemTime <= endTime) {

            return (
                <Flatlist_Item
                    dt_txt={item.dt_txt}
                    temp={item.main.temp}
                    weather_condition={item.weather[0].main}
                />
            )
        }
        else {
            return null // If time has passed, return null to render nothing
        }

    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground source={require('../../assets/upcoming_weather_background_image.jpg')} style={styles.image_background}>
                <View style={styles.container1}>
                    <FlatList
                        data={weatherData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.dt_txt}
                    />
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6
    },

    container2: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
})

export default Upcoming_Weather