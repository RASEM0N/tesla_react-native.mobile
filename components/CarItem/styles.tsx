import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('screen').height,
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    subtitleCTA: {
        textDecorationLine: 'underline',
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
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
})
