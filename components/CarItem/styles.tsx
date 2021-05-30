import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
    subtitleCTA: {
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
    },
})
