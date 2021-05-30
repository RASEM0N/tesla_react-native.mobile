import React from 'react'
import { Dimensions, FlatList, ScrollView, View } from 'react-native'

import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem/CarItem'

interface PropsType {}

const CarList: React.FC<PropsType> = ({}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem {...item} />}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={true}
                snapToAlignment="center"
                decelerationRate="fast"
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    )
}

export default CarList
