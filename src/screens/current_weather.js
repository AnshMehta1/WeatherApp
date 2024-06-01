import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Weather_Types from '../utilities/weather_types'

const Current_Weather = ({ weatherData }) => {

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0].main

  const styles = StyleSheet.create({
    container1: {
      backgroundColor: Weather_Types[weatherCondition].Backgroundcolor,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    container2: {
      marginTop: -1,
      backgroundColor: Weather_Types[weatherCondition].Backgroundcolor,
      paddingLeft: 10
    },

    wrapper: {
      flex: 1,
    },

    temperature: {
      fontSize: 48
    },

    feels: {
      fontSize: 30

    },

    high_low: {
      fontSize: 25
    },

    description: {
      fontSize: 25
    }
  })

  return (

    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container1}>
        <Feather name={Weather_Types[weatherCondition].Icon} size={100} color='black' />
        <Text style={styles.temperature}>{temp}°C</Text>
        <Text style={styles.feels}>Feel like {feels_like}°C</Text>
        <Text style={styles.high_low}>High: {temp_max}°C  ,  Low: {temp_min}°C</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.description}>{Weather_Types[weatherCondition].Message}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Current_Weather