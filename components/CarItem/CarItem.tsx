import React from 'react'
import { ImageBackground, Text, View, Alert } from 'react-native'
import CustomButton from '../CustomButton/CustomButton'
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
                <Text style={styles.subtitle}>
                    {tagline} <Text style={styles.subtitleCTA}>{taglineCTA || ''}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    type="primary"
                    onPress={() => Alert.alert('PRIMARY', 'Custom Order was pressed')}
                    content="Custom Order"
                />
                <CustomButton
                    type="secondary"
                    onPress={() => Alert.alert('SECONDARY', 'Existing Inventory was pressed')}
                    content="Existing Inventory"
                />
            </View>
        </View>
    )
}

export default CarItem
