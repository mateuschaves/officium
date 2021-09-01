import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: "45%",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    },
    containerHover: {
        backgroundColor: '#6838c8',
        borderRadius: 8,
        width: "45%",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        elevation: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    titleHover: {
        fontSize: 20,
        color: '#fff',
        fontWeight: "700",
    },
    image: {
        width: 54,
        height: 54,
        margin: 15,
    }
})

export default styles;