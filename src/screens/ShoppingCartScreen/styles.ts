import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
        marginBottom: 20,

    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },

    text: {
        fontSize: 16,
        color: 'gray'
    },

    textBold: {
        fontSize: 16,
        fontWeight: '500',
    },

    button: {
        margin: 20,
        backgroundColor: 'black',
        bottom: 0,
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