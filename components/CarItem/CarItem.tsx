import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from './styles'

interface PropsType {
    name: string
    tagline: string
    taglineCTA?: string
    image: any
}

const CarItem: React.FC<PropsType> = ({ name, tagline, taglineCTA, image }) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>
        </View>
    )
}

export default CarItem
