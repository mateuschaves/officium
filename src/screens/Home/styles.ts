import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
        margin: 16,
        marginTop: 35,
    },
    container: {
       
    },
    services: {
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 45,
    },
    title: {
        fontSize: 20,
        marginBottom: 25,
        fontWeight: "700",
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: colors.primary,
        borderRadius: 30,
        elevation: 8
    }
});

export default styles;