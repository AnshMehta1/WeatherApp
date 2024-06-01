import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Weather_Types from '../utilities/weather_types'
import moment from 'moment'

const FlatlistItem = (props) => {
    const { dt_txt, temp, weather_condition } = props
  
    return (
      <View style={styles.container}>
        <Feather name={Weather_Types[weather_condition].Icon} size={50} color='#000000' />
        <Text style={styles.text}>{moment(dt_txt).format('dddd')} , {moment(dt_txt).format('h:mm:ss a')}</Text>
        <Text style={styles.temperature}>Temperature: {temp}°C</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      width: 250,
      padding: 20,
      marginHorizontal: 16,
      marginVertical: 8,
      alignItems: 'center',
      backgroundColor: '#B4FCF9',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderColor: '#000000',
      borderWidth: 4
    },
  
    text: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
  
    temperature: {
      color: '#666',
      fontSize: 16,
      marginTop: 5,
    },
  })
  
  export default FlatlistItem