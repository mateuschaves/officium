import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 60,
        marginBottom: 60,
    },
    iconContainer: {
        left: "90%",
        position: "absolute",
        zIndex: 50,
    },
    input: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        height: 56,
        paddingLeft: 20,
    }
});

export default styles;