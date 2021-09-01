import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 90,
    }
})

export default styles;