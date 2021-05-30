import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

interface PropsType {
    type: 'primary' | 'secondary'
    content: string
    onPress: () => void
}

const CustomButton: React.FC<PropsType> = ({ type, content, onPress }) => {
    const isPrimary = type === 'primary'
    const backgroundColor = isPrimary ? '#171A20CC' : '#FFFFFFA6'
    const color = isPrimary ? '#FFFFFF' : '#171A20'

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
                <Text style={[styles.text, { color }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default CustomButton
