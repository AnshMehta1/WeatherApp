import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Error = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 30, textAlign: 'center'}}>Something went wrong</Text>
            <View style={{ marginTop: 30 }}>
                <Feather name={'frown'} size={100} color={'white'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Error
