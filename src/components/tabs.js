import React from 'react'
import Current_Weather from '../screens/current_weather'
import Upcoming_Weather from '../screens/upcoming_weather'
import City from '../screens/city'
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',

                tabBarInactiveTintColor: 'white',

                tabBarStyle: {
                    backgroundColor: 'black',
                },

                headerStyle: {
                    backgroundColor: 'black'
                },

                headerTitleStyle: {
                    fontSize: 25,
                    color: 'white'
                },

                headerTitleAlign: 'center',

            }} >
                
            <Tab.Screen name={'Current'} options={{
                tabBarIcon: ({ focused }) => <Feather name='sun' size={25} color={focused ? 'tomato' : 'white'} />
            }}>
                {() => <Current_Weather weatherData={weather.list[0]} />}
            </Tab.Screen>


            <Tab.Screen name={'Upcoming'} options={{
                tabBarIcon: ({ focused }) => <Feather name='clock' size={25} color={focused ? 'tomato' : 'white'} />
            }} >
                {() => <Upcoming_Weather weatherData={weather.list} />}
            </Tab.Screen>

            <Tab.Screen name={'City'} options={{
                tabBarIcon: ({ focused }) => <Feather name='map-pin' size={25} color={focused ? 'tomato' : 'white'} />
            }} >
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default Tabs