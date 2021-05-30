import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import CarItem from './components/CarItem/CarItem'

export default function App() {
    return (
        <View style={styles.container}>
            <CarItem
                name="Model S"
                tagline="Starting at $69,420"
                image={require('./assets/images/ModelS.jpeg')}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    carContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover',
    },
})
