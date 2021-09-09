import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    description: {
        fontSize: 15,
        fontWeight: "400",
        marginVertical: 8,
    },
    image: {
        width: 54,
        height: 54,
        margin: 15,
        borderRadius: 90
    },
    serviceHeader: {
        marginTop: 100,
        flexDirection: "row",
        alignItems: 'center',
    }
});

export default styles;