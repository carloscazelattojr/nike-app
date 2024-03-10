import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    main: {
        padding: 20
    },

    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
    },

    price: {
        fontWeight: '500',
        fontSize: 16,
    },

    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300',
    },

    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },

});