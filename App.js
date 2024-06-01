import React from 'react'
import useGetWeather from './src/user_defined_hooks/usegetweather'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/tabs'
import Error from './src/screens/error'

const App = () => {

  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !error) {

    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  else {

    return (
      <View style={styles.container}>

        {loading ? <ActivityIndicator size={'large'} color={'#000000'} /> : <Error />}

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'

  }
})

export default App