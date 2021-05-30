import React from 'react'
import { StyleSheet, View } from 'react-native'
import CarList from './components/CarList/CarList'
import { StatusBar } from 'expo-status-bar'
import Header from './components/Header/Header'

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <CarList />
            <StatusBar style="light" />
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
})
