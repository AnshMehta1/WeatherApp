import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env';

const useGetWeather = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
            const data = await response.json()
            setWeather(data)
        } catch (error_caugth) {
            setError('Could not fetch weather data')
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        (async () => {
            var { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                setError('Permission to access location was denied')
                return
            }
            else {
                var user_location = await Location.getCurrentPositionAsync({})
                setLatitude(user_location.coords.latitude)
                setLongitude(user_location.coords.longitude)

                await fetchWeatherData()
            }

        })()
    }, [latitude, longitude])

    return [loading, error, weather]
}

export default useGetWeather