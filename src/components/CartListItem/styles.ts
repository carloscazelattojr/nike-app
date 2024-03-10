import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
    },
    contentContainer: {
        flex: 1,
        marginLeft: 10,
    },
    image: {
        width: "40%",
        aspectRatio: 1,
    },
    name: {
        fontWeight: "500",
        fontSize: 18,
    },
    size: {
        fontSize: 16,
        color: "gray",
    },
    quantity: {
        marginHorizontal: 10,
        fontWeight: "bold",
        color: "gray",
    },
    footerPriceUnit: {
        marginTop: "auto",
        fontSize: 16,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    footer: {
        marginTop: "auto",
        flexDirection: "row",
        alignItems: "center",
    },
    itemTotal: {
        fontSize: 16,
        marginLeft: "auto",
        fontWeight: "500",
    },
});